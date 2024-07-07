const groq = require("groq-sdk");
const chatModel = require("../../models/chat");

const groqClient = new groq({ apiKey: process.env.GROQ_API_KEY });

const handleChatbotRequest = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const itemsData = await chatModel.getDataChat();

    if (itemsData.length === 0) {
      res.json({
        reply: "Maaf, tidak ada item menu yang tersedia di database.",
      });
      return;
    }

    const menuSections = itemsData.reduce((sections, item) => {
      if (!sections[item.section]) {
        sections[item.section] = [];
      }
      sections[item.section].push(`- ${item.Nama} (Rp ${item.Harga})`);
      return sections;
    }, {});

    let itemText = "FI-TECH\n\nItem yang tersedia adalah:\n";
    for (const [section, items] of Object.entries(menuSections)) {
      itemText += `\n**${section}**\n`;
      itemText += items.join("\n");
    }

    const fullMessage = `${itemText}\nPengguna: ${userMessage}`;

    const chatCompletion = await groqClient.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "system",
          content:
            "Anda adalah asisten yang berbicara dalam bahasa Indonesia dan memberikan informasi tentang item di FI-TECH. Jika pengguna bertanya tentang suplemen protein, berikan jawaban dalam bentuk daftar bernomor yang dimulai dengan 1.",
        },
        {
          role: "user",
          content: fullMessage,
        },
      ],
    });

    const botResponse =
      chatCompletion.choices[0]?.message?.content ||
      "Maaf, terjadi kesalahan saat mencoba mengambil respons.";

    const formattedResponse = botResponse
      .split(/(\d+\.\s)/g)
      .filter(Boolean)
      .map((item, index) => {
        return index > 0 && /^\d+\.\s/.test(item)
          ? `\n${item.trim()}`
          : item.trim();
      })
      .join("");

    res.json({ reply: formattedResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      reply: "Maaf, terjadi kesalahan saat memproses permintaan Anda.",
    });
  }
};

module.exports = { handleChatbotRequest };

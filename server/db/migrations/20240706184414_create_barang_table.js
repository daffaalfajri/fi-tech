exports.up = function (knex) {
  return knex.schema
    .createTable("barang", (table) => {
      table.increments("idBarang").primary();
      table.string("Nama", 100).notNullable();
      table.string("Merek", 100).notNullable();
      table.string("BeratBersih", 100).notNullable();
      table.integer("Harga").notNullable();
      table.text("gambar").notNullable();
    })
    .then(function () {
      return knex("barang").insert([
        {
          Nama: "Evolene",
          Merek: "Evolene",
          BeratBersih: "45gram",
          Harga: 100000,
          gambar:
            "https://drive.google.com/file/d/1QGf9FH4FVK8qlfxJTrLnn9o6ODt5t-0Z/view?usp=drive_link",
        },
        {
          Nama: "Optimum Nutrition Gainner",
          Merek: "OP",
          BeratBersih: "60gram",
          Harga: 180000,
          gambar:
            "https://drive.google.com/file/d/16u5sXwImcETmvTCRrU9IPxDIpP_VEd7E/view?usp=drive_link",
        },
        {
          Nama: "Optimum Nutrition Whey",
          Merek: "OP",
          BeratBersih: "50gram",
          Harga: 150000,
          gambar:
            "https://drive.google.com/file/d/1nDp9quCq3NG-Nuazk5zePCZVyvzvZKv3/view?usp=drive_link",
        },
        {
          Nama: "Optimum Nutrition",
          Merek: "OP",
          BeratBersih: "80gram",
          Harga: 200000,
          gambar:
            "https://drive.google.com/file/d/1nDp9quCq3NG-Nuazk5zePCZVyvzvZKv3/view?usp=drive_link",
        },
        {
          Nama: "EvoWhey",
          Merek: "Evolene",
          BeratBersih: "214gram",
          Harga: 420000,
          gambar:
            "https://drive.google.com/file/d/1KsNA90MCDMeiDo2_uDlZA3vmJ3Zd52Lr/view?usp=drive_link",
        },
        {
          Nama: "RimbaWhey",
          Merek: "Rimbamass",
          BeratBersih: "900gram",
          Harga: 150000,
          gambar:
            "https://drive.google.com/file/d/1Fq9MaRti2BAB0ldkwISV_6ulyqNPHHy4/view?usp=drive_link",
        },
        {
          Nama: "BPI Sport",
          Merek: "BPI",
          BeratBersih: "3,5kg",
          Harga: 1000000,
          gambar:
            "https://drive.google.com/file/d/1apGmVSiyGAL18B637wOlZeGUSn1U0YkH/view?usp=drive_link",
        },
        {
          Nama: "Megamass",
          Merek: "Provous",
          BeratBersih: "4545gram",
          Harga: 380000,
          gambar:
            "https://drive.google.com/file/d/1BwnP4LFjOLkAcAr63f_D4XxcNJA7y7Ui/view?usp=drive_link",
        },
        {
          Nama: "Pro Gainner",
          Merek: "Muscle First",
          BeratBersih: "2721gram",
          Harga: 450000,
          gambar:
            "https://drive.google.com/file/d/1u53C4QpyAlbAx1w2vp6K35efOxDIuG7A/view?usp=drive_link",
        },
        {
          Nama: "L-Men",
          Merek: "L-Men",
          BeratBersih: "800gram",
          Harga: 350000,
          gambar:
            "https://drive.google.com/file/d/1mqcQqfX6lgUeGHqttssVLlvx5bHQkSD8/view?usp=drive_link",
        },
        {
          Nama: "Wheygan",
          Merek: "Rimbalife",
          BeratBersih: "900gram",
          Harga: 150000,
          gambar:
            "https://drive.google.com/file/d/13ex_59FTdkxPcUAhVXkuWH25yyv5C7B5/view?usp=drive_link",
        },
        {
          Nama: "Evomass",
          Merek: "Evolene",
          BeratBersih: "912gram",
          Harga: 399000,
          gambar:
            "https://drive.google.com/file/d/1QGf9FH4FVK8qlfxJTrLnn9o6ODt5t-0Z/view?usp=drive_link",
        },
        {
          Nama: "evolene isolate",
          Merek: "evolene",
          BeratBersih: "45gram",
          Harga: 150000,
          gambar:
            "https://drive.google.com/file/d/1NphK3tmo-fXRBs6w4P3iODk8-CHeDb_R/view?usp=drive_link",
        },
        {
          Nama: "Optimum Nutrition Whey",
          Merek: "OP",
          BeratBersih: "45gram",
          Harga: 250000,
          gambar:
            "https://drive.google.com/file/d/1aq0DDq14muvNZORNF54IpKKHMYXY1Giq/view?usp=drive_link",
        },
        {
          Nama: "Evogreen",
          Merek: "Evolene",
          BeratBersih: "1600gram",
          Harga: 650000,
          gambar:
            "https://drive.google.com/file/d/1zrAeeyCOmsd064Q_d3V_KmhzGTzArXWB/view?usp=drive_link",
        },
        {
          Nama: "Crevolene Monohydrate",
          Merek: "Evolene",
          BeratBersih: "300gram",
          Harga: 310000,
          gambar:
            "https://drive.google.com/file/d/1iW3CnLAwwnbPMTP3vQiBRqul7krvMucj/view?usp=drive_link",
        },
        {
          Nama: "Evoboost Evolene 60 kapsul",
          Merek: "Evolene",
          BeratBersih: "60kapsul",
          Harga: 330000,
          gambar:
            "https://drive.google.com/file/d/1qg3jKEkyybKh0lvcVPsuoqCY4HZO6imp/view?usp=drive_link",
        },
        {
          Nama: "Isolene Evolene 50 Serving",
          Merek: "Evolene",
          BeratBersih: "1650gram",
          Harga: 770000,
          gambar:
            "https://drive.google.com/file/d/1NphK3tmo-fXRBs6w4P3iODk8-CHeDb_R/view?usp=drive_link",
        },
        {
          Nama: "Prevo Evolene 25s - Pre-Workout",
          Merek: "Evolene",
          BeratBersih: "175gram",
          Harga: 195000,
          gambar:
            "https://drive.google.com/file/d/1gGe40tyu5v4J2ZJz9gUwO3hMmqZtg8oQ/view?usp=drive_link",
        },
        {
          Nama: "Evolene - Protein Bar - Evobar Coklat",
          Merek: "Evolene",
          BeratBersih: "22gram",
          Harga: 102000,
          gambar:
            "https://drive.google.com/file/d/1fGCw7oqR3DZbT81M_1azaWloJxXXFInD/view?usp=drive_link",
        },
        {
          Nama: "Prevo Evolene 7 Sachet - Pre-Workout",
          Merek: "Evolene",
          BeratBersih: "7sachet",
          Harga: 50000,
          gambar:
            "https://drive.google.com/file/d/1gGe40tyu5v4J2ZJz9gUwO3hMmqZtg8oQ/view?usp=drive_link",
        },
        {
          Nama: "Muscle first BCAA",
          Merek: "Muscle First",
          BeratBersih: "60kapsul",
          Harga: 175000,
          gambar:
            "https://drive.google.com/file/d/1P9QH46zz78opjbmm8tCPhUJZ5XxgYZmV/view?usp=drive_link",
        },
      ]);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("barang");
};

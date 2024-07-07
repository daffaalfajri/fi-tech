
import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
} from "@material-tailwind/react";
import {
    HomeIcon,
    GiftIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

export function SidebarWithLogo({ handleTabChange }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    const handleClickHome = () => {
        handleTabChange("home");
    };



    const handleClickProduk = () => {
        handleTabChange("produk");
    }
    const handleClickProfile = () => {
        handleTabChange("profile");
    }

    return (
        <div className="shadow-lg h-full bg-[#010101]">
            <Card className="sidebar h-screen w-72 rounded-none bg-[#010101] rounded-r-md" style={{ boxShadow: 'none' }}>
                <div className="mb-10 flex items-center gap-4 p-4 mx-auto">
                    <h1 className="text-4xl font-bold text-white">FI-<span className="text-orange-500">TECH</span></h1>
                </div>
                <List>
                    <Accordion
                        open={open === 1}
                    >
                        <ListItem className="p-0" selected={open === 1} onClick={handleClickHome}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5 text-white" />
                                </ListItemPrefix>
                                <Typography color="white" className="mr-auto font-normal">
                                    Home
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                    </Accordion>

                    <ListItem onClick={handleClickProduk}>
                        <ListItemPrefix>
                            <GiftIcon className="h-5 w-5 text-white" />
                        </ListItemPrefix>
                        <Typography color="white" className="mr-auto font-normal">
                            Tambah Produk
                        </Typography>
                    </ListItem>
                    <ListItem onClick={handleClickProfile}>
                        <ListItemPrefix>
                            <UserIcon className="h-5 w-5 text-white" />
                        </ListItemPrefix>
                        <Typography color="white" className="mr-auto font-normal">
                            Profile
                        </Typography>
                    </ListItem>
                </List>
            </Card>
        </div>
    );
}

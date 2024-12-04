'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Modal,
    Box,
    TextField,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

export default function Comodos() {
    const pathname = usePathname();
    const local = pathname.split("/").pop();

    const [open, setOpen] = useState(false);
    const [newRoom, setNewRoom] = useState("");
    const [rooms, setRooms] = useState<string[]>([]);

    const handleAddRoom = () => {
        if (newRoom) {
            setRooms([...rooms, `Cômodo: ${newRoom} - Objeto: Botijão de Gás`]);
            setOpen(false);
            setNewRoom("");
        } else {
            alert("Preencha o nome do cômodo!");
        }
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Gerenciar Cômodos - {local?.toUpperCase()}
                    </Typography>
                    <Button color="inherit" onClick={() => setOpen(true)}>
                        Adicionar Cômodo
                    </Button>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 2 }}>
                <Typography variant="h5">Meus Cômodos</Typography>
                <List>
                    {rooms.map((room, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={room} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Adicionar Novo Cômodo
                    </Typography>
                    <TextField
                        label="Nome do Cômodo"
                        variant="outlined"
                        fullWidth
                        value={newRoom}
                        onChange={(e) => setNewRoom(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Objeto"
                        variant="outlined"
                        fullWidth
                        value="Botijão de Gás"
                        disabled={true}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" fullWidth onClick={handleAddRoom}>
                        Adicionar
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

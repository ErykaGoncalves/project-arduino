'use client';

import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Escolha o Local
      </Typography>
      <Button
        variant="contained"
        sx={{ mb: 2 }}
        onClick={() => router.push("/comodos/casa")}
      >
        Casa
      </Button>
      <Button
        variant="contained"
        onClick={() => router.push("/comodos/industria")}
      >
        Indústria
      </Button>
    </Box>
  );
}

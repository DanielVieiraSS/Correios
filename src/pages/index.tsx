import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Head from "next/head";

import { ListItem, ListItemText } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const MOCKED_IMAGE =
  "https://images.unsplash.com/photo-1659353741638-9bbe25cd8715";

export default function Home() {
  return (
    <>
      <Head>
        <title>Senhas - Correios</title>
        <link rel="icon" href="/imgs/flaticon.png" type="image/png"></link>
      </Head>

      {/* Main */}
      <Grid
        className={inter.className}
        component={"main"}
        width="100vw"
        height="100vh"
        container
        direction={"column"}
        alignItems={"stretch"}
        justifyContent={"stretch"}
        flexWrap={"nowrap"}
      >
        {/* Sections */}
        <Grid item xs={10.5} container spacing={2} padding="1rem">
          {/* Left Section */}
          <Grid
            item
            xs={9}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <img
              src={MOCKED_IMAGE}
              alt="Banner"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "1210px",
                objectFit: "cover",
                border: "5px solid #006B9C",
                borderRadius: "1.25rem ",
              }}
            />

            {/* <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="0.5rem"
            >
              <Typography
                sx={{
                  color: "#423C3C",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: "900",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Quem Pode Usar O Atendimento Preferencial Nas Agências De
                Correios
              </Typography>

              <List>
                <PreferredServiceTile
                  title="Idosos"
                  imageUrl="/svgs/oldman.svg"
                  description="Clientes com 60 anos ou mais têm prioridade no atendimento preferencial. Ao solicitar esse serviço, eles serão atendidos com a máxima atenção e agilidade."
                />

                <PreferredServiceTile
                  title="Gestantes"
                  imageUrl="/svgs/pregnant.svg"
                  description="Futuras mamães também têm direito ao atendimento preferencial. Entendemos que a gravidez traz desafios adicionais, e estamos aqui para tornar o processo de envio e recebimento de encomendas o mais tranquilo possível."
                />

                <PreferredServiceTile
                  title="Deficientes"
                  imageUrl="/svgs/oldman.svg"
                  description="Se você ou alguém que está acompanhando precisa de assistência devido a mobilidade reduzida, nosso atendimento preferencial está disponível para garantir que sua visita à agência seja o mais suave possível. Basta informar nossa equipe no local."
                />
              </List>
            </Box> */}
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={3}
            display={"flex"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            flexDirection="column"
            gap="1rem"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                minHeight: "300px",
                padding: "1rem",

                gap: "1rem",
                borderRadius: "20px",
                border: "5px solid #e6b808",
                background: "#ededed",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  width: "100%",
                  color: "#423c3c",
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  transform: "uppercase",
                  textAlign: "left",
                }}
              >
                Senha Atual
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color: "#00a9e2",
                  fontSize: "4rem",
                  fontStyle: "normal",
                  fontWeight: "900",
                  lineHeight: "normal",
                }}
              >
                3560
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",

                  "& h3": {
                    color: "#423C3C",
                    fontSize: "1.25rem",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    transform: "uppercase",
                  },

                  "& h4": {
                    color: " #01759C",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                  },
                }}
              >
                <h3>Últimas:</h3>
                <h4>3560</h4>
                <h4>3560</h4>
                <h4>3560</h4>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                border: "5px solid #797676",
                background: "#ededed",
                padding: "1rem",
              }}
            >
              <Typography
                sx={{
                  color: "#423C3C",
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: "900",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Próximas Senhas
              </Typography>

              <List
                sx={{
                  listStyle: "none",
                  color: "#4e4f4f",
                  fontSize: "44px",
                  fontStyle: "normal",
                  fontWeight: "900",
                  lineHeight: "normal",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",

                  "& li *": {
                    color: "#423c3c",
                    fontSize: "3rem",
                    fontStyle: "normal",
                    fontWeight: "900",
                    lineHeight: "normal",
                    transform: "uppercase",
                  },
                }}
              >
                <ListItem>
                  <ListItemText sx={{ textAlign: "center" }}>2846</ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText sx={{ textAlign: "center" }}>2846</ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText sx={{ textAlign: "center" }}>2846</ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText sx={{ textAlign: "center" }}>2846</ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
        {/* Footer */}
        <Grid item xs={1.5}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

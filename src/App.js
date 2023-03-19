import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import twitch from "./assets/TwitchLogo.svg";
import twitter from "./assets/TwitterLogo.svg";
import instagram from "./assets/InstagramLogo.svg";
import youtube from "./assets/YoutubeLogo.svg";

const fighterListData = [
  {
    title: "Anderson Silva",
    url: "https://www.superlutas.com.br/lutador/?link=Anderson-Silva-1356",
    ImageUrl:
      "https://www.superlutas.com.br/wp-content/uploads/superlutas/20131219063404_anderson_silva.JPG",
    alt: "Anderson Silva",
  },
  {
    title: "Demian Maia",
    url: "https://www.superlutas.com.br/lutador/?link=Demian-Maia-14637",
    ImageUrl:
      "https://www.superlutas.com.br/wp-content/uploads/superlutas/20220325095404_Demian_Maia_ff.JPG",
    alt: "Demian Maia",
  },
  {
    title: "Jose Aldo",
    url: "https://www.superlutas.com.br/lutador/?link=Jose-Aldo-11506",
    ImageUrl:
      "https://www.superlutas.com.br/wp-content/uploads/superlutas/20220401042107_Jose_Aldo_ff.JPG",
    alt: "Jose Aldo",
  },
  {
    title: "Charles Oliveira",
    url: "https://www.superlutas.com.br/lutador/?link=Charles-Oliveira-30300",
    ImageUrl:
      "https://www.superlutas.com.br/wp-content/uploads/superlutas/20220325092225_Charles_Oliveira_ff.JPG",
    alt: "Charles Oliveira",
  },
  {
    title: "Rafael dos Anjos",
    url: "https://www.superlutas.com.br/lutador/?link=Rafael-dos-Anjos-11675",
    ImageUrl:
      "https://www.superlutas.com.br/wp-content/uploads/superlutas/20220331083405_Rafael_dos_Anjos_ff.JPG",
    alt: "Rafael dos Anjos",
  },
];

const channelsListData = [
  {
    title: "Superlutas",
    href: "https://www.youtube.com/c/superlutas",
    ImageUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu-oAKqDhripgXkzCLx15qpYHN2LMM5Me5mJIHAYIg=s88-c-k-c0x00ffffff-no-rj",
    alt: "Superlutas",
  },
  {
    title: "Sexto Round",
    href: "https://www.youtube.com/user/sextoround",
    ImageUrl:
      "https://yt3.ggpht.com/LZrO9RwVs7L8I1FKvblAeJIYYv1iHZElyY5vSovmcT-IYh7ETeO6qm3TW3qMYeSH7oilc0ri9Q=s88-c-k-c0x00ffffff-no-rj",
    alt: "Sexto Round",
  },
  {
    title: "Ag.Fight",
    href: "https://www.youtube.com/c/AgFight",
    ImageUrl:
      "https://yt3.ggpht.com/ti2mj-9DXFlp6IoQrgOitTFtRK8uhFAuBbFdN6phAw4LTPwp0c693RlgQePD9G6oSFaGKaINEdk=s88-c-k-c0x00ffffff-no-rj",
    alt: "Ag.Fight",
  },
  {
    title: "Canal Encarada",
    href: "https://www.youtube.com/c/CanalEncarada",
    ImageUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu_M88DTW0JGGOyN9v_chQwh4gppO_17ajzEPmFyCVg=s88-c-k-c0x00ffffff-no-rj",
    alt: "Canal Encarada",
  },
  {
    title: "PVT",
    href: "https://www.youtube.com/c/PortaldovtTV",
    ImageUrl:
      "https://yt3.ggpht.com/ytc/AMLnZu_nIEXd6BrpLJORxV6tcELg_pEuGFv0pp2eND7GXw=s88-c-k-c0x00ffffff-no-rj",
    alt: "PVT",
  },
  {
    title: "Igor Melotto",
    href: "https://twitter.com/MMAmelotto",
    ImageUrl:
      "https://d1fdloi71mui9q.cloudfront.net/ap5HjaHEQV6VVrByHnk0_1v6urXkiXXZICOZn",
    alt: "Igor Melotto",
  },
];

const socialListDate = [
  {
    title: "Twitch",
    url: "https://www.twitch.tv/n3wry4n",
    ImageUrl: twitch,
    alt: "Twitch",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/IldsonLeno",
    ImageUrl: twitter,
    alt: "Twitter",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/ildsonlen0/",
    ImageUrl: instagram,
    alt: "Instagram",
  },
  {
    title: "Youtuber",
    url: "https://www.youtube.com/channel/UCSwiRc83ZnW_7Le0OTW1xaQ",
    ImageUrl: youtube,
    alt: "Youtuber",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main className="container">
        <Section
          classNameContainner="lutadores-container"
          title="Lutadores Favoritos"
          subtitle="Os lutadores que eu mais acompanho!"
          className="lutadores-list"
        >
          {fighterListData.map(function (item) {
            return (
              <ListItem
                title={item.title}
                href={item.href}
                ImageUrl={item.ImageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          classNameContainner="channels-container"
          title="Canais e Youtubers de MMA"
          subtitle="Lista de canais e youtubers que não perco!"
          className="channel-list"
        >
          {channelsListData.map(function (item) {
            return (
              <ListItem
                title={item.title}
                url={item.url}
                ImageUrl={item.ImageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          classNameContainner="socials-container"
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListDate.map(function (item) {
            return (
              <ListItem
                title={item.title}
                url={item.url}
                ImageUrl={item.ImageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
};
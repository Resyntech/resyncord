const Home = () => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Menu />
      <ChatContent />
    </main>
  );
};

const Sidebar = () => {
  return (
    <section className="inset-y-0 left-0 flex flex-col items-center gap-2 bg-discord-black p-3">
      <Avatar>Icon</Avatar>
      <div className="w-8 border border-discord-dark" />
      <div className="flex flex-col gap-2">
        <Avatar>S</Avatar>
        <Avatar>S</Avatar>
        <Avatar>S</Avatar>
      </div>
    </section>
  );
};

const Avatar = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex h-12 w-12 items-center justify-center rounded-3xl bg-discord-dark text-discord-paper duration-300 ease-in-out hover:rounded-2xl hover:bg-discord-contrast hover:text-discord-paper active:rounded-2xl active:bg-discord-contrast active:text-discord-paper">
      {children}
    </button>
  );
};

const Menu = () => {
  return (
    <section className="h-full bg-discord-dark">
      <Header>
        <button className="w-max bg-discord-black p-1 text-xs text-discord-gray">
          Find or start a conversation
        </button>
      </Header>
      <div className="flex flex-col p-2">
        <MenuButton text="friends" icon="Icon" />
        <MenuButton text="library" icon="Icon" />
        <MenuButton text="nitro" icon="Icon" promo="1 month free" />
        <MenuButton text="message requests" icon="Icon" />
      </div>
    </section>
  );
};

const MenuButton = ({
  text,
  icon,
  promo,
}: {
  text: string;
  icon: string;
  promo?: string;
}) => {
  return (
    <button className="relative  flex items-center justify-start gap-4 rounded-sm p-2 capitalize text-discord-gray hover:bg-discord-light-dark">
      <p className="h-6 w-6">{icon}</p>
      <p className="w-max">{text}</p>
      {promo && (
        <p className="absolute right-0 rounded-md bg-discord-dark-special p-1 text-xs uppercase text-discord-paper">
          {promo}
        </p>
      )}
    </button>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-around p-2 shadow-md">
      {children}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div>
      <input
        className="rounded-sm bg-discord-black p-1 text-xs text-discord-gray"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

const ChatContent = () => {
  return (
    <section className="w-full bg-discord-light-dark">
      <Header>
        <p>Icons</p>
        <SearchBar />
      </Header>
    </section>
  );
};

export default Home;

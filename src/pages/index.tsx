import { useState } from "react";

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
      <div className="flex items-center justify-between px-4 text-discord-gray hover:text-discord-paper">
        <p className="text-xs uppercase ">direct messages</p>
        <button className="text-xl uppercase text-discord-gray hover:text-discord-paper">
          +
        </button>
      </div>
      <div className="flex flex-col p-2">
        <UserBox name="Resyntech" src="Icon" />
        <UserBox name="Resyntech" src="Icon" status="I'm a Butterfly" />
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
      <p className="h-8 w-8">{icon}</p>
      <p className="w-max">{text}</p>
      {promo && (
        <p className="absolute right-0 rounded-md bg-discord-dark-special p-1 text-xs uppercase text-discord-paper">
          {promo}
        </p>
      )}
    </button>
  );
};

const UserBox = ({
  name,
  src,
  status,
}: {
  name: string;
  src: string;
  status?: string;
}) => {
  const [xButton, setXButton] = useState<boolean>(false);
  return (
    <button
      onPointerEnter={() => setXButton(true)}
      onPointerLeave={() => setXButton(false)}
      className="relative flex items-center justify-start gap-4 rounded-sm p-2 capitalize text-discord-gray hover:bg-discord-light-dark hover:text-discord-paper"
    >
      <div className="relative">
        <p className="h-8 w-8 rounded-3xl bg-discord-contrast">{src}</p>
        <rect className="absolute bottom-0 right-0 h-3 w-3 rounded-3xl border-2 border-discord-dark bg-discord-active" />
      </div>
      <div className="absolute left-1/4 flex flex-col">
        <p className="w-max">{name}</p>
        {status && <p className="text-xs">{status}</p>}
      </div>
      {xButton && (
        <button className="absolute inset-y-0 right-2 text-xl text-discord-gray hover:text-discord-paper">
          x
        </button>
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

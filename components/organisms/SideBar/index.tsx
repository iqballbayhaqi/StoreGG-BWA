import Profile from "./Profile";
import MenuItem from "./MenuItem";
import Footer from "./Footer";

interface SideBarProps {
  menuActive: "overview" | "transactions" | "messages" | "card" | "rewards" | "settings"
}

export default function SideBar(props: SideBarProps) {
  const { menuActive } = props

  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="ic-menu-overview" active={menuActive === "overview"} href="/member" />
            <MenuItem title="Transactions" icon="ic-menu-transactions" active={menuActive === "transactions"} href="/member/transactions" />
            <MenuItem title="Messages" icon="ic-menu-messages" active={menuActive === "messages"} href="member/messages" />
            <MenuItem title="Card" icon="ic-menu-card" active={menuActive === "card"} href="/member/card" />
            <MenuItem title="Rewards" icon="ic-menu-rewards" active={menuActive === "rewards"} href="/member/rewards" />
            <MenuItem title="Settings" icon="ic-menu-settings" active={menuActive === "settings"} href="/member/edit-profile" />
            <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}

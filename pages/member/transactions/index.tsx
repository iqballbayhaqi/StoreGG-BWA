import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function Transaction() {
  return (
    <section className="transactions overflow-auto">
      <SideBar menuActive="transactions" />
      <TransactionContent />
    </section>
  );
}

import Link from "next/link";

interface listMenuProps {
  href: string;
  menuName: string;
}

interface TabGroupProps {
  tabName: string;
  listMenu: Array<listMenuProps>;
}

export default function TabGroup(props: TabGroupProps) {
  const { tabName, listMenu } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{tabName}</p>
      <ul className="list-unstyled">
        {listMenu.map((res) => (
          <li className="mb-6">
            <Link href={res.href}>
              <a className="text-lg color-palette-1 text-decoration-none">
                {res.menuName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

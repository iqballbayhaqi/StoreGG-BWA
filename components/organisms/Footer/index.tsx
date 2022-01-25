import Image from 'next/image';
import TabGroup from './TabGroup';

export default function Footer() {
  const company = [
    { href: '/', menuName: 'About Us' },
    { href: '/', menuName: 'Press Release' },
    { href: '/', menuName: 'Terms of Use' },
    { href: '/', menuName: 'Privacy & Policy' },
  ];
  const support = [
    { href: '/', menuName: 'Refund Policy' },
    { href: '/', menuName: 'Unlock Rewards' },
    { href: '/', menuName: 'Live Chatting' },
  ];
  const connect = [
    { href: 'mailto: hi@store.gg', menuName: 'hi@store.gg' },
    { href: 'mailto: team@store.gg', menuName: 'team@store.gg' },
    { href: 'http://maps.google.com/?q=Pasific 12,Jakarta Selatan', menuName: 'Pasific 12, Jakarta Selatan' },
    { href: 'tel: 02111229090', menuName: '021 - 1122 - 9090' },
  ];
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 text-lg-start text-center">
            <a href="/#" className="mb-30">
              <Image src="/icon/logo.png" height={60} width={60} />
            </a>
            <p className="mt-30 text-lg color-palette-1 mb-30">
              StoreGG membantu gamers
              <br />
              {' '}
              untuk menjadi pemenang sejati
            </p>
            <p className="mt-30 text-lg color-palette-1 mb-30">
              Copyright 2021. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-8 mt-lg-0 mt-20">
            <div className="row gap-sm-0">
              <TabGroup tabName="Company" listMenu={company} />
              <TabGroup tabName="Support" listMenu={support} />
              <TabGroup tabName="Connect" listMenu={connect} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

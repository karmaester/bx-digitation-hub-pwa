import Image from 'next/image';

import avatar from '@images/avatar-senora-patricia.png';
import Card from '@components/atoms/Card';
import { HomeStats } from '@components/molecules/Stats';
import HomeMenu from '@components/molecules/HomeMenu';

import barCode from '@images/bar-code.png';
import truck from '@images/truck.png';
import store from '@images/pick-up-building.png';

export default function Index() {
  const flex = {
    display: 'flex',
    gap: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'row wrap',
    margin: '1em 0'
  };

  const menuItems = [
    {
      id: 1,
      image: <Image src={barCode} alt='Código de barras' />,
      label: 'Consulta Zona',
      href: '/zone'
    },
    {
      id: 2,
      image: <Image src={truck} alt='Camión' />,
      label: 'Digitación Hub',
      href: '/hub'
    },
    {
      id: 3,
      image: <Image src={store} alt='Almacén' />,
      label: 'Salida a ruta',
      href: '/route'
    },
  ];

  return (
    <div style={{padding: '0 5vw'}}>

      <div style={flex}>
        <p style={flex}>
          <span>CD Valparaiso:</span>
          <span style={{color: 'var(--bx-link)'}}>Blanco 1120, Valparaiso, Chile</span>
        </p>
      </div>

      <div style={flex}>
        <Image src={avatar} alt='avatar' />
        <div>
          <h5>¡Hola Margarita!</h5>
          <p>Este es tu dashboard</p>
        </div>
      </div>

      <Card style={flex}>
        <HomeStats osTotal={80} offRouteOsTotal={8549} />
      </Card>

      <Card>
        <h5 style={{ textAlign: 'center', marginBottom: '1em' }}>¿Qué te gustaría hacer ahora?</h5>
        <HomeMenu items={menuItems} />
      </Card>

    </div>
  );
}

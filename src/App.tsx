import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';

import {
  AppShell,
  NavLink,
  Group,
  Divider,
  CloseButton,
  Center,
  Flex,
  ActionIcon,
  Text,
  Grid,
  Tooltip,
  Burger,
} from '@mantine/core';
import {
  IconGauge,
  IconChevronRight,
  IconChevronLeft,
  IconPlus,
  IconHome,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { UserMenu } from '@/components/UserMenu';

export default function App() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/home" />;
  }

  const [opened, { toggle }] = useDisclosure(true);
  const [active, setActive] = useState(0);

  const data = [
    { icon: IconHome, path: '/home', label: 'Home' },
    { icon: IconGauge, path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: opened ? 250 : 60,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="xl"
    >
      <AppShell.Header>
        <Grid>
          <Grid.Col span={6}>
            <Group p={15} justify="flex-start">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <Text size="lg" fw={500}>
                {data[active].label}
              </Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
            <Group p={10} justify="flex-end">
              <Tooltip label="Add new">
                <ActionIcon p={5} radius="md" size={35} variant="light">
                  <IconPlus size="sm" />
                </ActionIcon>
              </Tooltip>
              <ColorSchemeToggle />
              <UserMenu />
            </Group>
          </Grid.Col>
        </Grid>
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <AppShell.Section>
          <Center h={40}>
            <MantineLogo type={opened ? 'full' : 'mark'} size={25} />
          </Center>
        </AppShell.Section>
        <AppShell.Section grow my="xs">
          {data.map((item, index) => (
            <NavLink
              renderRoot={(props) => <Link to={item.path} {...props} />}
              key={item.label}
              active={index === active}
              label={item.label}
              leftSection={<item.icon size="1rem" stroke={1.5} />}
              onClick={() => setActive(index)}
            />
          ))}
        </AppShell.Section>
        <AppShell.Section>
          <Divider my="md" />
          {opened ? (
            <Flex justify="end" direction="row">
              <CloseButton onClick={toggle} icon={<IconChevronLeft size={18} stroke={1.5} />} />
            </Flex>
          ) : (
            <Flex justify="center" direction="row">
              <CloseButton onClick={toggle} icon={<IconChevronRight size={18} stroke={1.5} />} />
            </Flex>
          )}
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

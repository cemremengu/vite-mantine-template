import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import {
  AppShell,
  NavLink,
  Group,
  Divider,
  CloseButton,
  MantineProvider,
  Center,
  Flex,
  Button,
  UnstyledButton,
  Text,
  Grid,
  Avatar,
} from '@mantine/core';
import {
  IconGauge,
  IconChevronRight,
  IconChevronLeft,
  IconActivity,
  IconFingerprint,
  IconPlus,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';

import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [active, setActive] = useState(0);

  const data = [
    { icon: IconGauge, label: 'Dashboard' },
    {
      icon: IconFingerprint,
      label: 'Security',
      rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
    },
    { icon: IconActivity, label: 'Activity' },
  ];

  return (
    <MantineProvider theme={theme}>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{
          width: desktopOpened ? 200 : 60,
          breakpoint: 'sm',
          // collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <AppShell.Header h={60}>
          <Grid>
            <Grid.Col span={6}>
              <Group p={15} justify="flex-start">
                <Text size="lg" fw={500}>
                  Dashboard
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group p={10} justify="flex-end">
                <Button size="xs" leftSection={<IconPlus size={14} />} variant="light">
                  ADD DATA
                </Button>
                <ColorSchemeToggle />
                <Avatar size={35} radius="md">
                  CM
                </Avatar>
              </Group>
            </Grid.Col>
          </Grid>
        </AppShell.Header>

        <AppShell.Navbar p="xs">
          <AppShell.Section>
            <Center h={50}>
              <MantineLogo type={desktopOpened ? 'full' : 'mark'} size={25} />
            </Center>
          </AppShell.Section>
          <AppShell.Section grow my="xs">
            {data.map((item, index) => (
              <NavLink
                href="#required-for-focus"
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
            {desktopOpened ? (
              <Flex justify="end" direction="row">
                <CloseButton
                  onClick={toggleDesktop}
                  icon={<IconChevronLeft size={18} stroke={1.5} />}
                />
              </Flex>
            ) : (
              <Flex justify="center" direction="row">
                <CloseButton
                  onClick={toggleDesktop}
                  icon={<IconChevronRight size={18} stroke={1.5} />}
                />
              </Flex>
            )}
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

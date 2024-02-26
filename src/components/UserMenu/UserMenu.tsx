import { Menu, ActionIcon, Avatar } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';

export function UserMenu() {
  return (
    <Menu shadow="lg" width={200}>
      <Menu.Target>
        <ActionIcon p={5} variant="default" radius="lg" size={35}>
          <Avatar size={35} radius="md" />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label tt="uppercase" ta="left" fw={600}>
          cemre.mengu
        </Menu.Label>
        <Menu.Item leftSection={<IconLogout size={16} />}>Sign out</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

import { useMantineColorScheme, Menu, ActionIcon } from '@mantine/core';
import { IconSunHigh, IconMoonStars, IconCircleHalf2 } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Menu shadow="lg" width={200}>
      <Menu.Target>
        <ActionIcon p={5} radius="md" size={35} variant="default">
          {colorScheme === 'auto' ? (
            <IconCircleHalf2 size="sm" />
          ) : colorScheme === 'dark' ? (
            <IconMoonStars size="sm" />
          ) : (
            <IconSunHigh size="sm" />
          )}
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label tt="uppercase" ta="center" fw={600}>
          Select color modes
        </Menu.Label>
        <Menu.Item leftSection={<IconSunHigh size={16} />} onClick={() => setColorScheme('light')}>
          Light
        </Menu.Item>
        <Menu.Item leftSection={<IconMoonStars size={16} />} onClick={() => setColorScheme('dark')}>
          Dark
        </Menu.Item>
        <Menu.Item
          leftSection={<IconCircleHalf2 size={16} />}
          onClick={() => setColorScheme('auto')}
        >
          Use System Colors
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

// @ts-nocheck
"use client";
import { ThemeIcon, Text, Avatar, Timeline } from "@mantine/core";
import { IconSun, IconVideo } from "@tabler/icons-react";

function TimelineIMS() {
  return (
    <Timeline bulletSize={34}>
      <Timeline.Item title="Integrated Management System">
        <Text c="dimmed" size="sm">
          Highest compliance of standards
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="2008"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Quality ISO 9001
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size="0.rem" />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: "lime", to: "cyan" }}
            radius="xl"
          >
            <IconVideo size="0.8rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

export default TimelineIMS;

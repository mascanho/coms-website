"use client";
import React from "react";
import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { Link } from "lucide-react";

function HeaderMenu({ title }: Readonly<{ title: string }>) {
  return (
    <Menu shadow="md" width={200} trigger="hover">
      <Menu.Target>
        <span className="cursor-pointer">{title}</span>
      </Menu.Target>

      <Menu.Dropdown className="relative mt-3">
        <div className="absolute bg-white border-gray-200 border-l border-t left-24 rotate-45 -top-[5px] -z-20 w-2 h-2" />
        <Menu.Item component="a" href="#survey" className="text-center">
          Survey
        </Menu.Item>
        <Menu.Item component="a" href="#messages">
          Planning
        </Menu.Item>
        <Menu.Item component="a" href="#construction">
          Construction
        </Menu.Item>
        <Menu.Item component="a" href="#maintenance">
          Maintenance
        </Menu.Item>

        <Menu.Item component="a" href="#instalations">
          Instalations
        </Menu.Item>
        <Menu.Item component="a" href="#training">
          Training
        </Menu.Item>
        <Menu.Item component="a" href="#licensing" color="red">
          Licensing & Management
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default HeaderMenu;

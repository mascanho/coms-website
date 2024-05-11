"use client";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import HeaderMenu from "./HeaderMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileDrawerContent from "../MobileDrawerContent";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={true}
        size="xs"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        removeScrollProps={{ allowPinchZoom: true }}
      >
        <MobileDrawerContent />
      </Drawer>

      <header className="flex h-16 items-center border-b bg-white px-4 dark:bg-gray-950 md:px-6 fixed w-full z-20">
        <section className="mx-auto flex w-full max-w-5xl justify-between">
          <div className="w-full">
            <Link
              className="hidden items-center gap-2 font-semibold md:flex"
              href="#"
            >
              <ActivityIcon className="h-4 w-4 text-brand-primary " />
              <span className="text-brand-primary">Crossed Lines</span>
            </Link>
            <Link
              className="flex items-center gap-2 font-semibold md:hidden"
              href="#"
            >
              <RxHamburgerMenu onClick={open} className="h-4 w-4" />
              <span
                className="text-black hover:text-brand-primary"
                onClick={open}
              >
                Acme Inc
              </span>
            </Link>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-medium md:flex w-full sm:flex justify-end space-x-6">
            <HeaderMenu title="Solutions" />

            <Link
              className="text-black hover:text-brand-primary dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Our system
            </Link>
            <Link
              className="text-black hover:text-brand-primary dark:text-gray-400 dark:hover:text-gray-50"
              href="#values"
            >
              About us
            </Link>
            <a
              className="text-white bg-brand-primary px-5 py-1 rounded-lg  dark:text-gray-400 dark:hover:text-gray-50"
              href="mailto:5VrjX@example.com"
            >
              Contact
            </a>
          </nav>
        </section>
      </header>
    </>
  );
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

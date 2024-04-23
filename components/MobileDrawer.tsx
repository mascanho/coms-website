import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";

function MobileDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export default MobileDrawer;

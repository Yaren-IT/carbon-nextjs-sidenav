"use client";

import {
  Heading,
  SideNav,
  SideNavItem,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
} from "@carbon/react";

export default function Home() {
  return (
    <main>
      <Heading>Home</Heading>
      <SideNav aria-label="Side Navigation">
        {/* <SideNav aria-label="Side Navigation" placeholder={undefined}> */}
        <SideNavItems>
          <SideNavItem href="/">Home</SideNavItem>
          {/* <SideNavItem {...{href: "/"}>Home</SideNavItem> */}
          <SideNavMenu title="Pages">
            <SideNavMenuItem href="/">Home</SideNavMenuItem>
            {/* <SideNavMenuItem {...{href: "/"}} >Home</SideNavMenuItem> */}
          </SideNavMenu>
        </SideNavItems>
      </SideNav>
    </main>
  );
}

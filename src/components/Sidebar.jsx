import React from "react";
import { Box, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaProjectDiagram, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkBg = useColorModeValue("brand.200", "brand.700");
  const linkColor = useColorModeValue("brand.700", "white");

  const NavLinkItem = ({ to, icon, children }) => (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        display: "flex",
        alignItems: "center",
        padding: "0.5rem 1rem",
        borderRadius: "md",
        background: isActive ? linkBg : "transparent",
        color: isActive ? "white" : linkColor,
      })}
    >
      {icon}
      <Box ml={3}>{children}</Box>
    </NavLink>
  );

  return (
    <Box as="nav" bg="brand.700" p={4} minHeight="100vh" width="200px">
      <VStack spacing={4} align="stretch">
        <NavLinkItem to="/" icon={<FaHome />}>
          Dashboard
        </NavLinkItem>
        <NavLinkItem to="/projects" icon={<FaProjectDiagram />}>
          Projects
        </NavLinkItem>
        <NavLinkItem to="/settings" icon={<FaCog />}>
          Settings
        </NavLinkItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;

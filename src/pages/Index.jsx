import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project 1",
    status: "Approved",
    summary: "This is a summary of Project 1.",
    grantAmount: 100000,
    members: [
      { id: 1, name: "Member 1", role: "Project Lead", access: "Full" },
      { id: 2, name: "Member 2", role: "Researcher", access: "Limited" },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    status: "Pending",
    summary: "This is a summary of Project 2.",
    grantAmount: 200000,
    members: [
      { id: 3, name: "Member 3", role: "Project Lead", access: "Full" },
      { id: 4, name: "Member 4", role: "Researcher", access: "Limited" },
    ],
  },
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Research Council of Norway
      </Heading>

      <Accordion allowMultiple>
        {projects.map((project) => (
          <AccordionItem key={project.id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">{project.title}</Text>
                <Text>{project.status}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack align="start" spacing={4}>
                <Text>{project.summary}</Text>
                <Text>Grant Amount: {project.grantAmount} NOK</Text>
                <Button leftIcon={<FaUser />} onClick={() => openModal(project)}>
                  Manage Access
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Project Members</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedProject && (
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Role</Th>
                    <Th>Access</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {selectedProject.members.map((member) => (
                    <Tr key={member.id}>
                      <Td>{member.name}</Td>
                      <Td>{member.role}</Td>
                      <Td>{member.access}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;

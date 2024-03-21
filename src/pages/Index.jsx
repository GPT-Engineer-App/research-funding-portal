import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
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
  {
    id: 3,
    title: "Project 3",
    status: "In Progress",
    summary: "This is a summary of Project 3.",
    grantAmount: 150000,
    members: [
      { id: 5, name: "Member 5", role: "Project Lead", access: "Full" },
      { id: 6, name: "Member 6", role: "Researcher", access: "Limited" },
    ],
  },
  {
    id: 4,
    title: "Project 4",
    status: "Completed",
    summary: "This is a summary of Project 4.",
    grantAmount: 250000,
    members: [
      { id: 7, name: "Member 7", role: "Project Lead", access: "Full" },
      { id: 8, name: "Member 8", role: "Researcher", access: "Limited" },
    ],
  },
  {
    id: 5,
    title: "Project 5",
    status: "Approved",
    summary: "This is a summary of Project 5.",
    grantAmount: 180000,
    members: [
      { id: 9, name: "Member 9", role: "Project Lead", access: "Full" },
      { id: 10, name: "Member 10", role: "Researcher", access: "Limited" },
    ],
  },
  {
    id: 6,
    title: "Project 6",
    status: "Pending",
    summary: "This is a summary of Project 6.",
    grantAmount: 220000,
    members: [
      { id: 11, name: "Member 11", role: "Project Lead", access: "Full" },
      { id: 12, name: "Member 12", role: "Researcher", access: "Limited" },
    ],
  },
  {
    id: 7,
    title: "Project 7",
    status: "In Progress",
    summary: "This is a summary of Project 7.",
    grantAmount: 190000,
    members: [
      { id: 13, name: "Member 13", role: "Project Lead", access: "Full" },
      { id: 14, name: "Member 14", role: "Researcher", access: "Limited" },
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
    <Box p={8} bgGradient="linear(to-br, brand.700, brand.800, brand.900)">
      <Heading as="h1" size="xl" mb={8}>
        Research Council of Norway
      </Heading>

      <Accordion allowMultiple borderRadius="lg" bg="white" boxShadow="lg">
        {projects.map((project) => (
          <AccordionItem key={project.id}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Editable defaultValue={project.title} fontSize="xl" fontWeight="bold">
                  <EditablePreview />
                  <EditableInput />
                </Editable>
                <Text fontSize="lg">{project.status}</Text>
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

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius="lg">
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

import React, { useState } from "react";
import { Flex, Box, Heading, Text, VStack, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Table, Thead, Tbody, Tr, Th, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Editable, EditableInput, EditablePreview, Select } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Project 1",
    status: "Approved",
    summary: "This is a summary of Project 1.",
    grantAmount: 100000,
    responsible: "John Doe",
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
    responsible: "Jane Smith",
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
    responsible: "Mike Johnson",
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
    responsible: "Sarah Lee",
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
    responsible: "David Brown",
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
    responsible: "Emily Davis",
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
    responsible: "Michael Wilson",
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
    <Flex p={8} bgGradient="linear(to-br, brand.700, brand.800, brand.900)">
      <Flex p={8} bgGradient="linear(to-br, brand.700, brand.800, brand.900)">
        <Box flex="1">
          <Heading as="h1" size="xl" mb={4}>
            Research Council of Norway
          </Heading>
          <Text fontSize="2xl" fontWeight="bold" color="white" mb={8}>
            Total Grant Amount: {projects.reduce((total, project) => total + project.grantAmount, 0)} NOK
          </Text>

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
                    <HStack spacing={4}>
                      <Text>Grant Amount: {project.grantAmount} NOK</Text>
                      <Text fontWeight="bold">Responsible: {project.responsible}</Text>
                    </HStack>
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
                          <Td>
                            <Select defaultValue={member.access}>
                              <option value="None">None</option>
                              <option value="Medium">Medium</option>
                              <option value="Full">Full</option>
                            </Select>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <Box width="4cm" bg="white" p={4} ml={8} boxShadow="lg" borderRadius="lg">
          <img src="https://www.forskningsradet.no/en/resources/logos/forskningsradet-logo-english.png" alt="Research Council of Norway Logo" />
        </Box>
      </Flex>
      <Box width="4cm" bg="white" p={4} ml={8} boxShadow="lg" borderRadius="lg">
        <img src="https://www.forskningsradet.no/en/resources/logos/forskningsradet-logo-english.png" alt="Research Council of Norway Logo" />
      </Box>
    </Flex>
  );
};

export default Index;

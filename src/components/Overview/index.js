import React from "react";
import { useNavigate } from "react-router";
import { Button, Box, Flex, Header } from "../styled";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header data-cy="header">My Employees</Header>
      <Flex
        height="80%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box marginBottom="lg">
          <Button
            data-cy="newEmployeeButton"
            onClick={() => navigate("/create")}
          >
            Add new employees
          </Button>
        </Box>
        <Box>
          <Button
            data-cy="viewEmployeesButton"
            onClick={() => navigate("/view")}
          >
            View all employees
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Overview;

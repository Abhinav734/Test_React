import React from "react";
import { useNavigate } from "react-router";
import { Box, Button, Flex, Header } from "../styled";

const View = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <Box>
          <Button data-cy="backButton" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;

import React from "react";
import { useNavigate } from "react-router";
import { useFormikContext } from "formik";
import { Box, Button, Flex } from "../styled";

const FormButtons = () => {
  const { handleSubmit } = useFormikContext();
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center">
      <Box marginRight="sm">
        <Button data-cy="backButton" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Box>
      <Box>
        <Button data-cy="saveButton" onClick={handleSubmit} type="submit">
          Save
        </Button>
      </Box>
    </Flex>
  );
};

export default FormButtons;

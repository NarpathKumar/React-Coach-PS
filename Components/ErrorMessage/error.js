import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorTile = ({ message, type }) => {
  return (
    <Alert status={type}>
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorTile;

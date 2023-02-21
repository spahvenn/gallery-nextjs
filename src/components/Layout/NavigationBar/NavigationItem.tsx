import { styled, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledNavLink = styled(Link)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.contrastText
      : "#90caf9",
  textDecoration: "none",
  padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} 0`,
}));

interface Props {
  children: React.ReactNode;
  to: string;
}

export function NavigationItem({ children, to }: Props) {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <StyledNavLink href={to}>
      <Typography
        variant="h6"
        style={isActive ? { fontWeight: "bold" } : { fontWeight: "normal" }}
      >
        {children}
      </Typography>
    </StyledNavLink>
  );
}

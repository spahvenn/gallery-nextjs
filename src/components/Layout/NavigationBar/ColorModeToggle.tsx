import {
  GeneralTypes,
  useGeneral,
  useGeneralDispatch,
} from "@/src/context/GeneralContext";
import { Switch, Typography } from "@mui/material";

const ColorModeToggle = () => {
  const { uiMode } = useGeneral();
  const dispatch = useGeneralDispatch();
  return (
    <>
      <Typography>Dark mode:</Typography>
      <Switch
        sx={{ marginRight: 0.5 }}
        checked={uiMode === "dark"}
        onChange={() =>
          dispatch({
            type: GeneralTypes.SET_UI_MODE,
            payload: { mode: uiMode === "dark" ? "light" : "dark" },
          })
        }
      />
    </>
  );
};

export default ColorModeToggle;

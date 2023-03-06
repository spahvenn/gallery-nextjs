import {
  GeneralTypes,
  useGeneral,
  useGeneralDispatch,
} from "@/src/context/GeneralContext";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const ColorModeToggle = () => {
  const { uiMode } = useGeneral();
  const dispatch = useGeneralDispatch();
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              sx={{ marginRight: 1.5 }}
              checked={uiMode === "dark"}
              onChange={() =>
                dispatch({
                  type: GeneralTypes.SET_UI_MODE,
                  payload: { mode: uiMode === "dark" ? "light" : "dark" },
                })
              }
            />
          }
          label="Dark mode"
          labelPlacement="start"
        />
      </FormGroup>
    </>
  );
};

export default ColorModeToggle;

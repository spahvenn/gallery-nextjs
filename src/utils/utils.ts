import { useMediaQuery, useTheme } from "@mui/material";
import { Image } from "../types/types";

export const pagePreviews = {
  spring: {
    title: "Spring",
    description:
      "Browser our catalog of Spring images! Amazing landscapes blossoming life!",
    src: "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w1800-no?authuser=0",
    srcSmall:
      "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w1000-no?authuser=0",
    btnUrl: "/gallery?season=spring",
  },
  summer: {
    title: "Summer",
    description:
      "Browser our catalog of Summer images! Pick you favourite sunny landscapes!",
    src: "https://lh3.googleusercontent.com/pw/AL9nZEXDKIL0j35rRGj_oDNDnL17tYmm-dtSeNlKp1rHFQUzDd9Qz3CxdwpsWPRks-4jy3KS5mS-dmnbcxoYwv63BSc41z57irTkr_irGzp-VfxNxkRV2N2lvphTd3Le0GYqe5VZOnM4CV7l2cixqZawFOXqfg=w1800-no?authuser=0",
    srcSmall:
      "https://lh3.googleusercontent.com/pw/AL9nZEXDKIL0j35rRGj_oDNDnL17tYmm-dtSeNlKp1rHFQUzDd9Qz3CxdwpsWPRks-4jy3KS5mS-dmnbcxoYwv63BSc41z57irTkr_irGzp-VfxNxkRV2N2lvphTd3Le0GYqe5VZOnM4CV7l2cixqZawFOXqfg=w1000-no?authuser=0",
    btnUrl: "/gallery?season=summer",
  },
  autumn: {
    title: "Autumn",
    description:
      "Browser our catalog of Autumn images! Pick you vivid Autumn landscapes!",
    src: "https://lh3.googleusercontent.com/pw/AL9nZEXFOYb3rq2r5yoJiiC4rJ-9fOzRj7g_PV5anWMbYWQiFmQuaXADvntQGNR3bUNIuv4Bhp_6MRKDkPxwo92DhY-c48PW-9kSE4_SZd858-NrFI6ui7Vi8KpInq2B1EiYM2uBKA8hKn9TRPPZps01qJQsqg=w1800-no?authuser=0",
    srcSmall:
      "https://lh3.googleusercontent.com/pw/AL9nZEXFOYb3rq2r5yoJiiC4rJ-9fOzRj7g_PV5anWMbYWQiFmQuaXADvntQGNR3bUNIuv4Bhp_6MRKDkPxwo92DhY-c48PW-9kSE4_SZd858-NrFI6ui7Vi8KpInq2B1EiYM2uBKA8hKn9TRPPZps01qJQsqg=w1000-no?authuser=0",
    btnUrl: "/gallery?season=autumn",
  },
  winter: {
    title: "Winter",
    description:
      "Browser our catalog of Winter images! Frosty landscapes for all uses!",
    src: "https://lh3.googleusercontent.com/pw/AL9nZEWnEw6nznkffDQJbQPu9nEUa1fEUk-jAvZHgQkFwTwzrO6oiVDPCWm9HnTOl1h0kIO0_1sZRp4q_5hA18wb7UEAUqgvk2NA-u2AddDvPDYGDTNl-ulMXvBmIXNqm6jde3DKcsAtDJuVSYnR-vdjN-rt4A=w1800-no?authuser=0",
    srcSmall:
      "https://lh3.googleusercontent.com/pw/AL9nZEWnEw6nznkffDQJbQPu9nEUa1fEUk-jAvZHgQkFwTwzrO6oiVDPCWm9HnTOl1h0kIO0_1sZRp4q_5hA18wb7UEAUqgvk2NA-u2AddDvPDYGDTNl-ulMXvBmIXNqm6jde3DKcsAtDJuVSYnR-vdjN-rt4A=w1000-no?authuser=0",
    btnUrl: "/gallery?season=winter",
  },
};

const imageBankSeasons = {
  spring: [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w1000-no?authuser=0",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXRi7cjNArOloX0YgE8iQn0_d-AuuFVPkNuYplBzuN_7dQhHTVIDSvZ540dU5VfGbMMViXaxkKlbVCkNE0Dt9fiDGKmqXzdrjnrOtU8sGxJFWT9edNY0y2fm0M1PflzzOfy2y2xEycv-SWsaQMW75IHaw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXRi7cjNArOloX0YgE8iQn0_d-AuuFVPkNuYplBzuN_7dQhHTVIDSvZ540dU5VfGbMMViXaxkKlbVCkNE0Dt9fiDGKmqXzdrjnrOtU8sGxJFWT9edNY0y2fm0M1PflzzOfy2y2xEycv-SWsaQMW75IHaw=w1000-no?authuser=0",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEU3vKhqmZNW_CVLzOpsWTuAJmy0ms6Q7gyStUAC__rmXayWxkc8eSRDuIXYyOxNf00vs8R5ddhfOs9EghC1ORmxYtBj5Uu4PiwM9qd35xdboG9TVMbWmg_kPlJKH86C_2-r7bHkyETJTy1LQ1GhGAB2WQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEU3vKhqmZNW_CVLzOpsWTuAJmy0ms6Q7gyStUAC__rmXayWxkc8eSRDuIXYyOxNf00vs8R5ddhfOs9EghC1ORmxYtBj5Uu4PiwM9qd35xdboG9TVMbWmg_kPlJKH86C_2-r7bHkyETJTy1LQ1GhGAB2WQ=w1000-no?authuser=0",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWTMEkhbDIYwb5Ny-EJAnFZtNvz4uLwM0TPEoeP-NxhXeDvXNthb4NW4VugJKlpT_Q9Vfq-iWkKmc9vgCuTcJ8my8BD4yYyMhdCyjS0Ql4ZfVlvm2CjN3mpy8VSKUvHKKAjnWopvGeYoi5_oIig7jrmhQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWTMEkhbDIYwb5Ny-EJAnFZtNvz4uLwM0TPEoeP-NxhXeDvXNthb4NW4VugJKlpT_Q9Vfq-iWkKmc9vgCuTcJ8my8BD4yYyMhdCyjS0Ql4ZfVlvm2CjN3mpy8VSKUvHKKAjnWopvGeYoi5_oIig7jrmhQ=w1000-no?authuser=0",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVr-nbPvRxYhVRrL1Y5UUNVi-AHPKyH6xc4GmjKcHP2YMqSPdHiWvYbT8pSDVC9zSH3eggvp5DSIj9-HXwnLRFpB0nCtNXszS3AexernSXuL44G6-Y0RlEGOt_Wibkp9pPf_1wA4_gbrwN0CbYKO_JdQA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVr-nbPvRxYhVRrL1Y5UUNVi-AHPKyH6xc4GmjKcHP2YMqSPdHiWvYbT8pSDVC9zSH3eggvp5DSIj9-HXwnLRFpB0nCtNXszS3AexernSXuL44G6-Y0RlEGOt_Wibkp9pPf_1wA4_gbrwN0CbYKO_JdQA=w1000-no?authuser=0",
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXp63QCbxIu4ckGNy_JVJnmm188tw3ZeLAVIGIGb-XcWQOYNodUK54ApVuP30ufnKuJ4wuBPKHzjPZUKpwo0ZIRENhhS8j-kimMGUWqnKGBjDxvQbvy9ZxkfcE3siXuEaOrIwvrUzAhexIjBc7nOaGjfQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXp63QCbxIu4ckGNy_JVJnmm188tw3ZeLAVIGIGb-XcWQOYNodUK54ApVuP30ufnKuJ4wuBPKHzjPZUKpwo0ZIRENhhS8j-kimMGUWqnKGBjDxvQbvy9ZxkfcE3siXuEaOrIwvrUzAhexIjBc7nOaGjfQ=w1000-no?authuser=0",
    },
    {
      id: 7,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWX3PPxhwTNpx7S0RInCGkpspDG-NZPzNv8gdSshdNvBi_gImpGlXvO7nEM9aaKJa6JebfYOPacDmbbt2JguXHhhPl4KK4ZS-QzwMCG4QbnIYtm5IcoOcfWMzyanPDJk9eewCbGkHqOG9q4KbbfudzdDA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWX3PPxhwTNpx7S0RInCGkpspDG-NZPzNv8gdSshdNvBi_gImpGlXvO7nEM9aaKJa6JebfYOPacDmbbt2JguXHhhPl4KK4ZS-QzwMCG4QbnIYtm5IcoOcfWMzyanPDJk9eewCbGkHqOG9q4KbbfudzdDA=w1000-no?authuser=0",
    },
  ],
  summer: [
    {
      id: 8,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXDKIL0j35rRGj_oDNDnL17tYmm-dtSeNlKp1rHFQUzDd9Qz3CxdwpsWPRks-4jy3KS5mS-dmnbcxoYwv63BSc41z57irTkr_irGzp-VfxNxkRV2N2lvphTd3Le0GYqe5VZOnM4CV7l2cixqZawFOXqfg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXDKIL0j35rRGj_oDNDnL17tYmm-dtSeNlKp1rHFQUzDd9Qz3CxdwpsWPRks-4jy3KS5mS-dmnbcxoYwv63BSc41z57irTkr_irGzp-VfxNxkRV2N2lvphTd3Le0GYqe5VZOnM4CV7l2cixqZawFOXqfg=w1000-no?authuser=0",
    },
    {
      id: 9,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUrXTMBeuwIarTIIrPKf8y6M9u3rrmIRZY5pi6LBqpbrf3n74uNaYuX-L2LxX-2rrF7NkyVH9x5ySqies--56ZV1vvi1gXPeBZbhbIXLAjc_E0Xju9JQhEuJqH6znwNUkWi3tt_p-BeC9ECIAoXSsF2AA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUrXTMBeuwIarTIIrPKf8y6M9u3rrmIRZY5pi6LBqpbrf3n74uNaYuX-L2LxX-2rrF7NkyVH9x5ySqies--56ZV1vvi1gXPeBZbhbIXLAjc_E0Xju9JQhEuJqH6znwNUkWi3tt_p-BeC9ECIAoXSsF2AA=w1000-no?authuser=0",
    },
    {
      id: 10,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXZXsckyZNsQa_OsFdM61s-ndGbwl3P3UdVFcKF5PCxoIpfy4aPBl6lXr2XU91Di9PFeZkWmJriQ1s7bAOKaLS4kfH9NhX_J1PODdRZ4z2PxDE_Nri95CLxVN9TVbn8OwxoWoYonDO5xR56nVGJ9GHHYQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXZXsckyZNsQa_OsFdM61s-ndGbwl3P3UdVFcKF5PCxoIpfy4aPBl6lXr2XU91Di9PFeZkWmJriQ1s7bAOKaLS4kfH9NhX_J1PODdRZ4z2PxDE_Nri95CLxVN9TVbn8OwxoWoYonDO5xR56nVGJ9GHHYQ=w1000-no?authuser=0",
    },
    {
      id: 11,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEW8NjjQre4Kzst6QK8v_l6PkPDKeadBqSrijqtDtNCfBdn1fqmlwm4azt9RI0NFl5ZHA6pgqVtTQtl_i_Cq-ZVPmM4pxseNy7C-4gVixxRwigkN1oCY_rFNWk8adi_67FqXe4kpb_wRykuEAzqkJuY2Yg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEW8NjjQre4Kzst6QK8v_l6PkPDKeadBqSrijqtDtNCfBdn1fqmlwm4azt9RI0NFl5ZHA6pgqVtTQtl_i_Cq-ZVPmM4pxseNy7C-4gVixxRwigkN1oCY_rFNWk8adi_67FqXe4kpb_wRykuEAzqkJuY2Yg=w1000-no?authuser=0",
    },
    {
      id: 12,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEV-umKZuKjZ1hoI9jWhcO8N_ih41xRsnaq5RqZbx2HuVYZGjnuaDW6W-6qEAxklmVzNz5A9X62eT4NviB342LxBPNbqb9Ij2UXA8ar4NHFVgz7GLepuL-flfcVXE-evFCecHFoD8RcWO_lMmiTanwz1Xw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEV-umKZuKjZ1hoI9jWhcO8N_ih41xRsnaq5RqZbx2HuVYZGjnuaDW6W-6qEAxklmVzNz5A9X62eT4NviB342LxBPNbqb9Ij2UXA8ar4NHFVgz7GLepuL-flfcVXE-evFCecHFoD8RcWO_lMmiTanwz1Xw=w1000-no?authuser=0",
    },
    {
      id: 13,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUMZQc8tm-kNziGEN9QGkRW4obwN6rH27bml80s6y8XIW0huJ5SIc2waTF5ItZCKK4ueHi73kprEri0b5MlnBYek8nnnESOo1X94I1kuX0RE9W1dx_coH_lkuaKhLc4nwAS-_MJEkvZbADTgZoE7N4oGA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUMZQc8tm-kNziGEN9QGkRW4obwN6rH27bml80s6y8XIW0huJ5SIc2waTF5ItZCKK4ueHi73kprEri0b5MlnBYek8nnnESOo1X94I1kuX0RE9W1dx_coH_lkuaKhLc4nwAS-_MJEkvZbADTgZoE7N4oGA=w1000-no?authuser=0",
    },
    {
      id: 14,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXbemDHSx2mDCL8R9KcoScB4fu2Ez5S_MSRJFRHOZeiwetZaqtivyu7Ocfi9N2Z2bY881-ybBa-Y-B2geUtCSnBJ3PqDRecW06uYSDqv80g0fMYQeg6xasrPeiKbG1glLs4pMs2-lp8OYkJrvBmpu4VFQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXbemDHSx2mDCL8R9KcoScB4fu2Ez5S_MSRJFRHOZeiwetZaqtivyu7Ocfi9N2Z2bY881-ybBa-Y-B2geUtCSnBJ3PqDRecW06uYSDqv80g0fMYQeg6xasrPeiKbG1glLs4pMs2-lp8OYkJrvBmpu4VFQ=w1000-no?authuser=0",
    },
    {
      id: 15,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWNzyWAL3rmsb3D4iGdzQEy5x-Gz8x1_GIx2PXhr1QF8wEeAOlqyemiKtQZ2InpCQ1AiTntG_qaRFyTy9gyzgw6RJWgnCZbq5CreZnqZosGSsqdXIJa6j197_5GhlsP0yEq1Vqw_5HH1m4MvnrH8gYbTg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWNzyWAL3rmsb3D4iGdzQEy5x-Gz8x1_GIx2PXhr1QF8wEeAOlqyemiKtQZ2InpCQ1AiTntG_qaRFyTy9gyzgw6RJWgnCZbq5CreZnqZosGSsqdXIJa6j197_5GhlsP0yEq1Vqw_5HH1m4MvnrH8gYbTg=w1000-no?authuser=0",
    },
    {
      id: 16,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWRbToEVN9eq7J19B1IR7zXYdzmxzVfZk1g24aBO9TjV739gFxoBHbnc7DdZV38awbPcfN8ga_uiKEcBiY0tFSO5dDNaRm9JC_Yy7fj46Ox9RiD6_gs1LftavTLArOo8kR-1jaqhrUr6q-UJ8k2rs4mKA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWRbToEVN9eq7J19B1IR7zXYdzmxzVfZk1g24aBO9TjV739gFxoBHbnc7DdZV38awbPcfN8ga_uiKEcBiY0tFSO5dDNaRm9JC_Yy7fj46Ox9RiD6_gs1LftavTLArOo8kR-1jaqhrUr6q-UJ8k2rs4mKA=w1000-no?authuser=0",
    },
    {
      id: 17,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVmVyt6P5XBGIoCiKWv6UHLbkQm6cakST1ZqIQ_1Fkq9RmNusgs2wauUFDauuXRPAXSuWGhkXA5vYxLOnOC-z0UfmmAma7srPOinvY-ghiVpJnypxl7IyMLgIPrbRzWg5PUooxWbpxcVyDG_sYMQxCspQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVmVyt6P5XBGIoCiKWv6UHLbkQm6cakST1ZqIQ_1Fkq9RmNusgs2wauUFDauuXRPAXSuWGhkXA5vYxLOnOC-z0UfmmAma7srPOinvY-ghiVpJnypxl7IyMLgIPrbRzWg5PUooxWbpxcVyDG_sYMQxCspQ=w1000-no?authuser=0",
    },
    {
      id: 18,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXZgOUH6MGP-u15cDnF9o-fa0Gn85KHBqxJroCr_TbQ1XSNotOABlNAa7uSb1bw0eAJrdcdVoGpFRBRdZEpBaQCguL6XL9yuadUXn70JIc4oMOkkjZB8r2VXLC9vOHIYbsj8ecTuHPOtr5BYXiPUyPVwg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXZgOUH6MGP-u15cDnF9o-fa0Gn85KHBqxJroCr_TbQ1XSNotOABlNAa7uSb1bw0eAJrdcdVoGpFRBRdZEpBaQCguL6XL9yuadUXn70JIc4oMOkkjZB8r2VXLC9vOHIYbsj8ecTuHPOtr5BYXiPUyPVwg=w1000-no?authuser=0",
    },
    {
      id: 19,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEV3eMFPVn6KSaErG0SCM6KioA7nmUt5mDGurXZQCwPFKDuyyVwBkeWBl8T15a2oU9ToG1qT23QA10xi8eom2Y3UOk7Vm4_-sXk2cIN2gsBk4YxRIdYNSuWKY8-Xp3M3kz_FYsy_CuH2OmmZ_ZTSudGepg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEV3eMFPVn6KSaErG0SCM6KioA7nmUt5mDGurXZQCwPFKDuyyVwBkeWBl8T15a2oU9ToG1qT23QA10xi8eom2Y3UOk7Vm4_-sXk2cIN2gsBk4YxRIdYNSuWKY8-Xp3M3kz_FYsy_CuH2OmmZ_ZTSudGepg=w1000-no?authuser=0",
    },
  ],
  autumn: [
    {
      id: 20,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXFOYb3rq2r5yoJiiC4rJ-9fOzRj7g_PV5anWMbYWQiFmQuaXADvntQGNR3bUNIuv4Bhp_6MRKDkPxwo92DhY-c48PW-9kSE4_SZd858-NrFI6ui7Vi8KpInq2B1EiYM2uBKA8hKn9TRPPZps01qJQsqg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXFOYb3rq2r5yoJiiC4rJ-9fOzRj7g_PV5anWMbYWQiFmQuaXADvntQGNR3bUNIuv4Bhp_6MRKDkPxwo92DhY-c48PW-9kSE4_SZd858-NrFI6ui7Vi8KpInq2B1EiYM2uBKA8hKn9TRPPZps01qJQsqg=w1000-no?authuser=0",
    },
    {
      id: 21,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEU8zs1oFOLa4b28fepVA3fIobegwn6utS7YiQstzS7_vxgsyroPST8XDEzNvQsNIEi348UPDSwk2D8vQ_4GV4C6WkSZgiQTKM0XkvPkQ0x8pX4x0E5QzyvNO6aMFqLk7ZPMXgK3XQlzcRUX1grJgZju1w=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEU8zs1oFOLa4b28fepVA3fIobegwn6utS7YiQstzS7_vxgsyroPST8XDEzNvQsNIEi348UPDSwk2D8vQ_4GV4C6WkSZgiQTKM0XkvPkQ0x8pX4x0E5QzyvNO6aMFqLk7ZPMXgK3XQlzcRUX1grJgZju1w=w1000-no?authuser=0",
    },
    {
      id: 22,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVZIeomoNCqd7r8TRPIeKwcSUzZbvVw4GY6gVJ8TILyR-UVC63HdAgUmkqkDLlubl0sHSTv7Mf2jjh1BC_tVqj9FdGb2NiW1jl98NBPcQ_gdgWpqT0PqxVOkSSUZI-fBZCSKWkEHl1MxqvaKfDH9pXYbA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVZIeomoNCqd7r8TRPIeKwcSUzZbvVw4GY6gVJ8TILyR-UVC63HdAgUmkqkDLlubl0sHSTv7Mf2jjh1BC_tVqj9FdGb2NiW1jl98NBPcQ_gdgWpqT0PqxVOkSSUZI-fBZCSKWkEHl1MxqvaKfDH9pXYbA=w1000-no?authuser=0",
    },
    {
      id: 23,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEU-R0H9u5DZOjI2_Pt1Py1wT33_EDXEzxf5Pj9pzOOALR_FJs0zMguSe_NfcW_Irf0mz2DtOp3T_BgqA80FMt3m2FQ0Ctt_DLNtrLO8NV9xdtQIEaiZE43vAiW-KvmbpTjfQvA485UntqAyAcmatBFogw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEU-R0H9u5DZOjI2_Pt1Py1wT33_EDXEzxf5Pj9pzOOALR_FJs0zMguSe_NfcW_Irf0mz2DtOp3T_BgqA80FMt3m2FQ0Ctt_DLNtrLO8NV9xdtQIEaiZE43vAiW-KvmbpTjfQvA485UntqAyAcmatBFogw=w1000-no?authuser=0",
    },
    {
      id: 24,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWpEMPBmPRGvAs-8ywIaUf94cdZ_4njqLsl0gmq2R32nRjWzQ-BDAe2nTdVbDWF2ym_lv2Yq4KzPARVRbulMn5wXMjBKlKDR1txwFA-conURMX4uled-Jt4bzM5xqT0EI7KfUyljopes6H5CgJhGg2z7A=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWpEMPBmPRGvAs-8ywIaUf94cdZ_4njqLsl0gmq2R32nRjWzQ-BDAe2nTdVbDWF2ym_lv2Yq4KzPARVRbulMn5wXMjBKlKDR1txwFA-conURMX4uled-Jt4bzM5xqT0EI7KfUyljopes6H5CgJhGg2z7A=w1000-no?authuser=0",
    },
    {
      id: 25,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEW-X5f3LdJDvj73uhnUPwdfktf2I-hp7GjxSm37MCXLlwerzyqB2J8Qiu-tgDxRJBTiMIG3gPO87AL2IRfzyFkJPBAWFnE-2Ei6qvTdooxiqFgpskqHdH6MlJKguzqCce9f8Sw-xS3j98Y5WsYmRIq5Yg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEW-X5f3LdJDvj73uhnUPwdfktf2I-hp7GjxSm37MCXLlwerzyqB2J8Qiu-tgDxRJBTiMIG3gPO87AL2IRfzyFkJPBAWFnE-2Ei6qvTdooxiqFgpskqHdH6MlJKguzqCce9f8Sw-xS3j98Y5WsYmRIq5Yg=w1000-no?authuser=0",
    },
    {
      id: 26,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUKzomS9uo0_G7o4XXt7cjtI8eEaWoLXiv8LPos7wSw_DeJylOp4ojfyP8VxMPHxj4Ln0R6sRgBpjq6RALzjNHb-9ryNlUzt9RUMX1PB5yuTHjrGEyryWjtuGXYhVQp-kOCP1Edf6ww_OJoo8cfatAVzg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUKzomS9uo0_G7o4XXt7cjtI8eEaWoLXiv8LPos7wSw_DeJylOp4ojfyP8VxMPHxj4Ln0R6sRgBpjq6RALzjNHb-9ryNlUzt9RUMX1PB5yuTHjrGEyryWjtuGXYhVQp-kOCP1Edf6ww_OJoo8cfatAVzg=w1000-no?authuser=0",
    },
    {
      id: 27,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWf4rDpjTapPYOjeuhHuryk6eG4D6mnEHWbLLaQvA7LHqsBKUpWFAr2cHTZZR0hZi-GxYPiXG_n7IeGHGS4A50Ek3rHDOOvZxmpaTFLe3C1gFO9auWFTaIIDh11TJ7rgbth2SEePsmwEnW5Vha3ZskHbg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWf4rDpjTapPYOjeuhHuryk6eG4D6mnEHWbLLaQvA7LHqsBKUpWFAr2cHTZZR0hZi-GxYPiXG_n7IeGHGS4A50Ek3rHDOOvZxmpaTFLe3C1gFO9auWFTaIIDh11TJ7rgbth2SEePsmwEnW5Vha3ZskHbg=w1000-no?authuser=0",
    },
    {
      id: 28,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEV_qui-wTzmxSs50Wk5rdgi6Ux0y5QbKyjwcxJ2WKHoWzVt3_7CJaoDKodB1Ju9hPSX2hV7aZJ-wd4rTC7raA-ZD2LkbX6bHEEkD4oF7K2BNRWU6SYVMZ7NL4c16S2QOXc4TIqocUudXUUhKT_9RFm8lw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEV_qui-wTzmxSs50Wk5rdgi6Ux0y5QbKyjwcxJ2WKHoWzVt3_7CJaoDKodB1Ju9hPSX2hV7aZJ-wd4rTC7raA-ZD2LkbX6bHEEkD4oF7K2BNRWU6SYVMZ7NL4c16S2QOXc4TIqocUudXUUhKT_9RFm8lw=w1000-no?authuser=0",
    },
    {
      id: 29,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWzvivrYjNzwaoVbovGpOa_yLgO7eGGAx30kQTrcMKUQ7A4btJpDOzWKmjDqWKW0l_dyspyK23ZSKFf6GXBDHQJ9jH99BWa30n2jlvOxJntG_SL_gAxSUzRRuK9EOuxte76za9DaENsLMEp11Iri7BPgA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWzvivrYjNzwaoVbovGpOa_yLgO7eGGAx30kQTrcMKUQ7A4btJpDOzWKmjDqWKW0l_dyspyK23ZSKFf6GXBDHQJ9jH99BWa30n2jlvOxJntG_SL_gAxSUzRRuK9EOuxte76za9DaENsLMEp11Iri7BPgA=w1000-no?authuser=0",
    },
    {
      id: 30,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUu52HyXYUaXf4D2MRVws8jcsf9RdU-NVWmxTDdSxVujcoTxEVi6onpSuxHY7w1o-ohpGJv1agUystlhlxY1w7m1XSar0_KUJem66YHvwfZ4EStXa02Px705r6kMUufJalCryNBrI0R0rBD8vMK4YHH3g=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUu52HyXYUaXf4D2MRVws8jcsf9RdU-NVWmxTDdSxVujcoTxEVi6onpSuxHY7w1o-ohpGJv1agUystlhlxY1w7m1XSar0_KUJem66YHvwfZ4EStXa02Px705r6kMUufJalCryNBrI0R0rBD8vMK4YHH3g=w1000-no?authuser=0",
    },
    {
      id: 31,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVBeg3DVxIJKelZworxJNU8BHqH3qP7Ji-2oiC-H1cyFJTDH1_P5luPk4-y3ByAYTSy7KSZXltBBBCl5nLTbPiBCPrqBbC_VOEgl_456wWr7vzRkbi-8bSYTZ29YcoeSpzpp63cnjigm8xXp_3zGKAYIw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVBeg3DVxIJKelZworxJNU8BHqH3qP7Ji-2oiC-H1cyFJTDH1_P5luPk4-y3ByAYTSy7KSZXltBBBCl5nLTbPiBCPrqBbC_VOEgl_456wWr7vzRkbi-8bSYTZ29YcoeSpzpp63cnjigm8xXp_3zGKAYIw=w1000-no?authuser=0",
    },
  ],
  winter: [
    {
      id: 32,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWnEw6nznkffDQJbQPu9nEUa1fEUk-jAvZHgQkFwTwzrO6oiVDPCWm9HnTOl1h0kIO0_1sZRp4q_5hA18wb7UEAUqgvk2NA-u2AddDvPDYGDTNl-ulMXvBmIXNqm6jde3DKcsAtDJuVSYnR-vdjN-rt4A=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEWnEw6nznkffDQJbQPu9nEUa1fEUk-jAvZHgQkFwTwzrO6oiVDPCWm9HnTOl1h0kIO0_1sZRp4q_5hA18wb7UEAUqgvk2NA-u2AddDvPDYGDTNl-ulMXvBmIXNqm6jde3DKcsAtDJuVSYnR-vdjN-rt4A=w1000-no?authuser=0",
    },
    {
      id: 33,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUsaZjTmK4T7OJYmnkzbASGuNSz6bf2UC64ccXuGLKFFkOiNvxjAzU7BbBFkAD_3fxA-gQNyHcjxe264LKhFgglM0Tyl8EKkugi6y-F73-9r9suJjRPYORAEQk7qlnecvl8ARLCVrQHMbxe5ycvoolvjQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUsaZjTmK4T7OJYmnkzbASGuNSz6bf2UC64ccXuGLKFFkOiNvxjAzU7BbBFkAD_3fxA-gQNyHcjxe264LKhFgglM0Tyl8EKkugi6y-F73-9r9suJjRPYORAEQk7qlnecvl8ARLCVrQHMbxe5ycvoolvjQ=w1000-no?authuser=0",
    },
    {
      id: 34,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEX0UwWHDs4P9hOFarWTuX2fu9fXMiIXU8dam2MsAYWduyhVfS_8fW0Hxb5e30sWb1R7-rj44lAuhfYnR3mCnxuTmCojcHVMD1nIDv4yesTveoFy2HP7y7PgVwpQVLVhhRcCbWr8RGahhc6jvv1byG1fpw=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEX0UwWHDs4P9hOFarWTuX2fu9fXMiIXU8dam2MsAYWduyhVfS_8fW0Hxb5e30sWb1R7-rj44lAuhfYnR3mCnxuTmCojcHVMD1nIDv4yesTveoFy2HP7y7PgVwpQVLVhhRcCbWr8RGahhc6jvv1byG1fpw=w1000-no?authuser=0",
    },
    {
      id: 35,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUBNnKmiTV0rSvfgoLLUaPQdKvXH8RONOfZN6P1lfmeo3vvmgKEg9Dh-sSghnkOboVxkr65Tw2lZwydaBeg208e1pGsYpwhUlEgrfvFVYwIgn6OhKmBw8kCOfTb9u2IbP7O7p00GRa4AVryr4G1v2cX-w=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUBNnKmiTV0rSvfgoLLUaPQdKvXH8RONOfZN6P1lfmeo3vvmgKEg9Dh-sSghnkOboVxkr65Tw2lZwydaBeg208e1pGsYpwhUlEgrfvFVYwIgn6OhKmBw8kCOfTb9u2IbP7O7p00GRa4AVryr4G1v2cX-w=w1000-no?authuser=0",
    },
    {
      id: 36,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEU1y9j0IOJ71eqvqjAesjAOYhPvP3HqIu0NUllRhQpITF01uIpqjcZSZB4Vs_nFsKKa0ywjLroIzrKK3wgVAqkTNVA4Kq8Tg41JRh5RZNuD39AxGum1wCy5o1pihIXBwR8nUIIpcopmDoHJuAA1VcC_Lg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEU1y9j0IOJ71eqvqjAesjAOYhPvP3HqIu0NUllRhQpITF01uIpqjcZSZB4Vs_nFsKKa0ywjLroIzrKK3wgVAqkTNVA4Kq8Tg41JRh5RZNuD39AxGum1wCy5o1pihIXBwR8nUIIpcopmDoHJuAA1VcC_Lg=w1000-no?authuser=0",
    },
    {
      id: 37,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEURAzpm5_2qBsMbblfhjrDtQuMPdW96eoQ0B8wkXVAueDOilRujCmSDwCClAlEiI5iqd6cnp1yQHX7habWkIl9kWl5OY4g9pFnOGsrJ2e_2-vk9BtpneILNv0Rzkld6H0T-n6m3lPZKe3xgcZjRf0JQxA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEURAzpm5_2qBsMbblfhjrDtQuMPdW96eoQ0B8wkXVAueDOilRujCmSDwCClAlEiI5iqd6cnp1yQHX7habWkIl9kWl5OY4g9pFnOGsrJ2e_2-vk9BtpneILNv0Rzkld6H0T-n6m3lPZKe3xgcZjRf0JQxA=w1000-no?authuser=0",
    },
    {
      id: 38,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUWh-1hCxsNJKGd5vCEPB4-uG9QcXT9tQeJEw82WgTo5-Cg7XrFhacU8Z7pVClFO_rmDD8AuKVA2y83n7Dxf-Pmv9rgi_EJoznNQVSic1x_zMeFU2ze3DzfWDnqi5GJQF4FDm56RCM-BdSa2tMpvKxh1g=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUWh-1hCxsNJKGd5vCEPB4-uG9QcXT9tQeJEw82WgTo5-Cg7XrFhacU8Z7pVClFO_rmDD8AuKVA2y83n7Dxf-Pmv9rgi_EJoznNQVSic1x_zMeFU2ze3DzfWDnqi5GJQF4FDm56RCM-BdSa2tMpvKxh1g=w1000-no?authuser=0",
    },
    {
      id: 39,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEUYD_yLIuJXUa1SP7lZwh0cjBlU8Mc5o0xHgQHciwRkuJe7Lnzk-MpFPicS7oFnxnXSZPaD_2P4XbmidkSJhSWe4XzWtI5ujAIPID5CpwJnybIH02-NzF6qhbp3bN8p688Hyg-X3Uh8PWgEStJh298T4g=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEUYD_yLIuJXUa1SP7lZwh0cjBlU8Mc5o0xHgQHciwRkuJe7Lnzk-MpFPicS7oFnxnXSZPaD_2P4XbmidkSJhSWe4XzWtI5ujAIPID5CpwJnybIH02-NzF6qhbp3bN8p688Hyg-X3Uh8PWgEStJh298T4g=w1000-no?authuser=0",
    },
    {
      id: 40,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXFPhNeAP6brQ-DQCwiJnLA42WBgLRYhMNpBoxgZ50CQ7Bn2NZDYldpWynJnSHSK4E-dMtaTo_QLzU7s-aoVgBBWMMpgVusQDrWy5o_xo1D-fLevDTArn2Y5fR1AM0LcqnbjZpieSXsRaocmGUjIv7gXg=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXFPhNeAP6brQ-DQCwiJnLA42WBgLRYhMNpBoxgZ50CQ7Bn2NZDYldpWynJnSHSK4E-dMtaTo_QLzU7s-aoVgBBWMMpgVusQDrWy5o_xo1D-fLevDTArn2Y5fR1AM0LcqnbjZpieSXsRaocmGUjIv7gXg=w1000-no?authuser=0",
    },
    {
      id: 41,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXvFDpNguhEj9NQrhQGcb_WZZpLGj1bCK5TFwECcScDDr16zc4rBuQRhf_RzGuE08P4ZuU5GqjfySdywg7ZM4XtDlYTaH-3TKWWwvPNUdU4S8RrCKRoQyl1lJ1nOynP2wBQ-mDfqSydsY3-mNGGWlM3ig=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEXvFDpNguhEj9NQrhQGcb_WZZpLGj1bCK5TFwECcScDDr16zc4rBuQRhf_RzGuE08P4ZuU5GqjfySdywg7ZM4XtDlYTaH-3TKWWwvPNUdU4S8RrCKRoQyl1lJ1nOynP2wBQ-mDfqSydsY3-mNGGWlM3ig=w1000-no?authuser=0",
    },
    {
      id: 42,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVCuhHDYkgWSICAABj6rxsLyGEv7lrB3kQeGoTCYhX6ot7x9wkGPm6ZWGKjZEfGZfcx0eMnIScQzu4sJwt6_d0p1kWzvlWraBFRFdeGKRK3gmxy8SyAZRXses4PTB6KMXppxuqKKghZW0bT8V0jpXLfgQ=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVCuhHDYkgWSICAABj6rxsLyGEv7lrB3kQeGoTCYhX6ot7x9wkGPm6ZWGKjZEfGZfcx0eMnIScQzu4sJwt6_d0p1kWzvlWraBFRFdeGKRK3gmxy8SyAZRXses4PTB6KMXppxuqKKghZW0bT8V0jpXLfgQ=w1000-no?authuser=0",
    },
    {
      id: 43,
      src: "https://lh3.googleusercontent.com/pw/AL9nZEVHWYJ5Os9BoMfi5bpXcvZyNWmGEV9VZTkqhQCr6YQVBa3_LiiQc_WGfxch6G-oAZa6P7RFplz2T4DEkYw8lu2sYYSfWSWI9-y9lcEgvos9QFsSqddRaI6c9ihyDz-i6EMhDdl-oXh5bAuxCYfZWEUUWA=w1800-no?authuser=0",
      srcSmall:
        "https://lh3.googleusercontent.com/pw/AL9nZEVHWYJ5Os9BoMfi5bpXcvZyNWmGEV9VZTkqhQCr6YQVBa3_LiiQc_WGfxch6G-oAZa6P7RFplz2T4DEkYw8lu2sYYSfWSWI9-y9lcEgvos9QFsSqddRaI6c9ihyDz-i6EMhDdl-oXh5bAuxCYfZWEUUWA=w1000-no?authuser=0",
    },
  ],
};

export function getImageById(id: number): Image {
  return imageBank.all.find((picture) => picture.id === id) as Image;
}

export const imageBank: { [key: string]: Image[] } = {
  ...imageBankSeasons,
  ...{
    all: [
      ...imageBankSeasons.spring,
      ...imageBankSeasons.summer,
      ...imageBankSeasons.autumn,
      ...imageBankSeasons.winter,
    ],
  },
};

export interface CarouselItem {
  season: string;
  src: string;
  srcSmall: string;
}

export const carouselItems: CarouselItem[] = [
  {
    season: "winter",
    src: pagePreviews.winter.src,
    srcSmall: pagePreviews.winter.srcSmall,
  },
  {
    season: "spring",
    src: pagePreviews.spring.src,
    srcSmall: pagePreviews.spring.srcSmall,
  },
  {
    season: "summer",
    src: pagePreviews.summer.src,
    srcSmall: pagePreviews.summer.srcSmall,
  },
  {
    season: "autumn",
    src: pagePreviews.autumn.src,
    srcSmall: pagePreviews.autumn.srcSmall,
  },
];

export const emptyImageValue: Image = {
  id: 0,
  src: "",
  srcSmall: "",
};

function useBreakPointName() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const sm = useMediaQuery(theme.breakpoints.only("sm"));
  const md = useMediaQuery(theme.breakpoints.only("md"));
  if (xs) {
    return "xs";
  } else if (sm) {
    return "sm";
  } else if (md) {
    return "md";
  } else {
    return "lg";
  }
}

export function useImageSrc(image: Image) {
  const breakpoint = useBreakPointName();

  switch (breakpoint) {
    case "xs": {
      return image.srcSmall;
    }
    default: {
      return image.src;
    }
  }
}

export function useDialogImageMinHeight() {
  const breakpoint = useBreakPointName();

  switch (breakpoint) {
    case "xs": {
      return "193px";
    }
    case "sm": {
      return "295px";
    }
    case "md": {
      return "460px";
    }
    default: {
      return "496px";
    }
  }
}

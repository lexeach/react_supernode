/* ============================================================
   NUMBER FORMATTER
============================================================ */

export const formatNumber = (
    value,
    decimals = 2
) => {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return "0";

    }

    return Number(value).toLocaleString(
        undefined,
        {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }
    );

};

/* ============================================================
   WALLET ADDRESS
============================================================ */

export const shortAddress = (
    address
) => {

    if (!address) return "";

    return `${address.slice(0, 6)}...${address.slice(-4)}`;

};

/* ============================================================
   COPY
============================================================ */

export const copyText = async (
    text
) => {

    try {

        await navigator.clipboard.writeText(text);

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

};

/* ============================================================
   DATE
============================================================ */

export const formatDate = (
    timestamp
) => {

    if (!timestamp) return "";

    const date =
        new Date(Number(timestamp) * 1000);

    return date.toLocaleDateString();

};

/* ============================================================
   DATE & TIME
============================================================ */

export const formatDateTime = (
    timestamp
) => {

    if (!timestamp) return "";

    const date =
        new Date(Number(timestamp) * 1000);

    return date.toLocaleString();

};

/* ============================================================
   TIME LEFT
============================================================ */

export const secondsToTime = (
    seconds
) => {

    seconds = Number(seconds);

    const h =
        Math.floor(seconds / 3600);

    const m =
        Math.floor((seconds % 3600) / 60);

    const s =
        seconds % 60;

    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

};

/* ============================================================
   SLEEP
============================================================ */

export const sleep = (
    ms
) => {

    return new Promise(

        resolve =>

            setTimeout(
                resolve,
                ms
            )

    );

};

/* ============================================================
   VALID ADDRESS
============================================================ */

export const isAddress = (
    address
) => {

    return /^0x[a-fA-F0-9]{40}$/.test(
        address
    );

};

/* ============================================================
   POSITIVE NUMBER
============================================================ */

export const isPositiveNumber = (
    value
) => {

    return Number(value) > 0;

};

/* ============================================================
   RANDOM KEY
============================================================ */

export const randomKey = () => {

    return Math.random()
        .toString(36)
        .substring(2, 12);

};

/* ============================================================
   EMPTY
============================================================ */

export const isEmpty = (
    value
) => {

    return (

        value === null ||

        value === undefined ||

        value === ""

    );

};
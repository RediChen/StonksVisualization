const timestamp = new Date('Jan 11 2022').getTime();
const DAY_MSEC = 86400000;
const INDEX = 100;
const data_0111 = [
    {
        x: timestamp,
        y: INDEX
    }
];

for (let i = 0; i < 15 ; i++) {
    data_0111.push(
        {
            x: timestamp + (i + 1) * DAY_MSEC,
            y: INDEX + (Math.random() * 20 - 10)
        }
    )
}
export default data_0111;


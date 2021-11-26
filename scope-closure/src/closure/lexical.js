const buildCount = (i) => {
    let count = i;

    const displaytCount = () => {
        console.log(count++);
    };

    return displaytCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
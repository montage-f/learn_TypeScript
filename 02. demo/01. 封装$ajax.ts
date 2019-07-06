/**
 * Created by montage_fz on 2019-07-05
 */
/**
 *$ajax({
 *    type:'GET',
 *    url:'test.json',
 *    data:{},
 *    dataType:'json'
 *})
 */

// 定义接口
interface Config {
    type: string
    url: string
    data?: object
    async: boolean
    success: (data) => void
}

const formData = (data: object): string => {
    let arr: string[] = [];
    for (let i in data) {
        arr.push(
            `${i}=${data[i]}`
        );
    }
    return arr.join('&');
};

const ajax = (config: Config): void => {
    const {type, url, data, async, success} = config;
    const params = formData(data);
    const xhr = new XMLHttpRequest();
    if (type === 'GET') {
        xhr.open(type, `${url}?${params}`, async);
        xhr.send(null);
    } else {
        xhr.open(type, url, async);
        xhr.send(params);
    }
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            success(xhr.responseText);
        }
    };
};
ajax({
        type: 'GET',
        url: 'string',
        data: {},
        async: true,
        success: (data) => {
            console.log(data);
        }
    }
);

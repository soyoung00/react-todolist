import { create } from 'zustand'
import axios from 'axios'

const todoStore = create((set) => ({
    data: [],
    save: async function (value) {
        try {
            let res = await axios.post(process.env.REACT_APP_APIURL, value);
            set(function (item) {
                return {
                    data: [...item.data, res.data.data]
                }
            });
            if (!res.data.success) {
                // console.log('res : ', res);
                throw new Error(res.data.msg);
            }

        } catch (error) {
            console.log(`에러 발생 - ${error}`);
        }
    },
    get: async function () {
        const res = await axios.get(process.env.REACT_APP_APIURL);
        console.log('store get ::::::::::::::: ', res);
        set({ data: res.data });//화면을 바꿔라(위 data:[]에 넣음)

    },
    // 서버로 필터거는법
    // get: async function (url) {
    //     const res = await axios.get(`${process.env.REACT_APP_APIURL}?sort=${url}`);
    //     console.log('store get ::::::::::::::: ', res);
    //     set({ data: res.data });//화면을 바꿔라(위 data:[]에 넣음)

    // },
    updateItem: async function (id, editText) {
        console.log(id);
        const res = await axios.put(`${process.env.REACT_APP_APIURL}/content?id=${id}`, { content : editText });

        set(function (item) {
            let updateData = item.data.map(function (obj) {
                if (obj._id == id) {
                    obj.content = editText;
                }
                return obj;
            });

            return { data: updateData }
        });

    },
    deleteItem: async function (id) {
        try {
            const res = await axios({
                url: `${process.env.REACT_APP_APIURL}?id=${id}`,
                method: 'delete'

            });
            if (!res.data.success) throw new Error('에러발생')
            set(function (item) {
                return { data: item.data.filter(obj => obj._id != id) }
            });



        } catch (err) {

        }
    },
    completeTodo: async function (id) {
        const res = await axios.put(`${process.env.REACT_APP_APIURL}/state?id=${id}`, { isdone: true });
        set(function (item) {
            console.log('iiiiitemmmm :: ', item);
            let updateData = item.data.map(function (obj) {
                if (obj._id == id) {
                    obj.isdone = true;
                }
                return obj;
            });
            return { data: updateData }
        });
    }
}))

export default todoStore;
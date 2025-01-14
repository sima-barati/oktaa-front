import axios from '../config/axiosClient';

const repository = 'reservations';

const ReservationRepository = {
    index() {
        return axios.get(`/${repository}`);
    },
    store() {
        return axios.post(`/${repository}`);
    },
    show() {
        return axios.get(`/${repository}/id`);
    },
    update() {
        return axios.put(`/${repository}/id`);
    },
    destroy() {
        return axios.delete(`/${repository}/id`);
    },
}
export default ReservationRepository

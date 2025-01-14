import GuestRepository from './GuestRepository.js';
import RoomRepository from "@/repositories/RoomRepository.js";
import ReservationRepository from "@/repositories/ReservationRepository.js";

const repositories = {
    'room': RoomRepository,
    'reservation': ReservationRepository,
    'guest': GuestRepository,
}

export default {
    get: name => repositories[name]
}

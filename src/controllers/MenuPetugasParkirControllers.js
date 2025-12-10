import menuPetugasParkirService from "../services/MenuPetugasParkir.js";

class menuPetugasParkirController {
    static async getMenuPetugasParkir(req, res) {
        try {
            const data = await menuPetugasParkirService.getDataMenuPetugasParkir();
            return res.status(200).json(
                {
                    message: 'Data Petugas Parkir Berhasil Dimuat',
                    data
                }
            );
        } catch (err) {
            console.error('Gagal Mengambil Data Menu Petugas Parkir', err);
            return res.status(500).json(
                {
                    message: err.message || 'Internal Server Error!'
                }
            );
        }
    };

    static async tambahPetugasParkir(req, res) {
        try {
            const result = await menuPetugasParkirService.tambahPetugasParkir(req.body);
            return res.status(201).json(
                {
                    message: result.message
                }
            )
        } catch (err) {
            console.error('Tambah Petugas Error', err);
            return res.status(400).json(
                {
                    message: err.message || 'Gagal Menambahkan Petugas Parkir!'
                }
            );
        }
    };

    static async editPetugasParkir(req, res) {
        try {
            const { id } = req.params;
            const result = await menuPetugasParkirService.editPetugasParkir(id, req.body);

            return res.status(200).json(
                {
                    message: result.message
                }
            );
        } catch (err) {
            console.error('Edit Petugas Error', err);
            return res.status(400).json(
                {
                    message: err.message || 'Gagal Memperbarui Data Petugas Parkir!'
                }
            );
        }
    };

    static async updateStatusPetugasParkir(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const result = await menuPetugasParkirService.statusPetugasParkir(id, status);

            return res.status(200).json(
                {
                    message: result.message
                }
            );
        } catch (err) {
            console.error('Update Status Petugas Error', err);
            return res.status(400).json(
                {
                    message: err.message || 'Gagal Memperbarui Status Petugas Parkir!'
                }
            );
        }
    };

    static async deletePetugasParkir(req, res) {
        try {
            const { id } = req.params;
            const result = await menuPetugasParkirService.deletePetugasParkir(id);

            return res.status(200).json(
                {
                    message: result.message
                }
            )
        } catch (err) {
            console.error('Hapus Petugas Error', err);
            return res.status(400).json(
                {
                    message: err.message || 'Gagal Menghapus Petugas Parkir!'
                }
            );
        }
    };
};

export default menuPetugasParkirController;
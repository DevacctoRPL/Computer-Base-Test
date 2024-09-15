import pool from "../database/connection.js";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

// Definisikan interface untuk tipe data pengguna
interface User {
  nis?: number;
  nama: string;
  panggilan: string;
  sandi: string;
  is_lulus: boolean;
  is_switch_tab: boolean;
  id_kelas: string;
}

// Class UserModel untuk operasi CRUD
class SiswaModel {
  // Method untuk mendapatkan semua pengguna
  static async getAllSiswa(): Promise<User[]> {
    const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM siswa");
    return rows as User[];
  }

  // Method untuk mendapatkan pengguna berdasarkan nis
  static async getSiswaByNis(nis: number): Promise<User | null> {
    const [rows] = await pool.query<RowDataPacket[]>(
      "SELECT * FROM siswa WHERE nis = ?",
      [nis]
    );
    return (rows[0] as User) || null;
  }

  // Method untuk menambahkan pengguna baru
  static async addSiswa(user: User): Promise<void> {
    await pool.query<ResultSetHeader>(
      "INSERT INTO siswa (nis, nama, panggilan, sandi, is_lulus, is_switch_tab, id_kelas) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        user.nis,
        user.nama,
        user.panggilan,
        user.sandi,
        user.is_lulus,
        user.is_switch_tab,
        user.id_kelas,
      ]
    );
  }

  // Method untuk memperbarui pengguna
  static async updateSiswa(nis: number, user: User): Promise<void> {
    await pool.query<ResultSetHeader>(
      "UPDATE siswa SET panggilan = ?, sandi = ? WHERE nis = ?",
      [user.panggilan, user.sandi, nis]
    );
  }

  // Method untuk menghapus pengguna
  static async deleteSiswa(nis: number): Promise<void> {
    await pool.query<ResultSetHeader>("DELETE FROM siswa WHERE nis = ?", [nis]);
  }
}

export default SiswaModel;
//ini komen
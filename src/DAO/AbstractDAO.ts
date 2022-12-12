import { PrismaClient } from "@prisma/client";
import Endereco from "../models/Endereco";
import AbsEntidadeDominio from "../models/AbsEntidadeDominio";
import Result from "../utils/Result";
import ConnectionFactory from "./ConnectionFactory";
import EnderecoDAO from "./EnderecoDAO";
import IDAO from "./IDAO";

export default abstract class AbstractDAO implements IDAO {
    static con: PrismaClient;
    result: Result
    id: number | undefined;
    constructor() {
        this.result = new Result('');
        AbstractDAO.con = ConnectionFactory.criar()
    }
    abstract criar(entidade: AbsEntidadeDominio): Promise<Result>
    abstract alterar(entidade: AbsEntidadeDominio): Promise<Result>
    abstract excluir(id: number): Promise<any>
    abstract consultar(entidade?: Partial<AbsEntidadeDominio>): Promise<Result>

}
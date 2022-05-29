import ruanganModel from './models/Ruangan'
import permintaanModel from './models/Permintaan_Perbaikan'
import biModel from './models/Buku_Inventaris'

const setAssociation= () => {
    ruanganModel.hasOne(permintaanModel,{
        foriegnKey: 'id'
    })
    permintaanModel.belongsTo(ruanganModel)

}

export default setAssociation
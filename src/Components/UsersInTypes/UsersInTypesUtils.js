
export async function GetUsers(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsers'))
                    resolve(JSON.parse(localStorage.getItem('AssetSenseUsers')))
                else
                    resolve([])
            }
        }, 500);
    });
}

export async function GetUsersTypes(gerarErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (gerarErro) {
                reject(new Error('Erro ao obter dados'));
            } else {
                if (localStorage.getItem('AssetSenseUsersTypes')) {
                    const Types = JSON.parse(localStorage.getItem('AssetSenseUsersTypes')).map((role) => {
                        return {
                            value: role.Value,
                            label: role.Value,
                        };
                    });
                    Types.push({ value: 'Todos', label: 'Todos' })
                    resolve(Types)
                }

                else
                    resolve([])
            }
        }, 500);
    });
}


export const UsersFilterOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];




export const DefaultTypesProps = {
    series: [],
    options: {
        theme: {
            monochrome: {
                enabled: true
            }
        },
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: [],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}


export const GetOptionsAndSeries = (Usuarios, TiposUsuarios) => {
    const Options = { ...DefaultTypesProps }
    const TiposUsuariosIds = [...TiposUsuarios.map(element => { return element.Id })]
    const TiposUsuariosLabels = [...TiposUsuarios.map(element => { return element.Value })]
    const TiposUsuariosQtd = [...TiposUsuarios.map(element => { return 0 })]
    var TiposUsuariosQtdCopy = [...TiposUsuariosQtd]

    TiposUsuariosIds.map((TipoID, IndexTipoUser) => {
        return Usuarios.map(User => {
            if (User.Type.Id === TipoID) {
                TiposUsuariosQtdCopy[IndexTipoUser] = TiposUsuariosQtdCopy[IndexTipoUser] + 1

            }
            return ''
        })
    })
    const optionsCopy = { ...Options.options }
    optionsCopy.labels = [...TiposUsuariosLabels]
    const NewOptions = { ...Options, series: [...TiposUsuariosQtdCopy] }
    NewOptions.options = { ...optionsCopy }
    return NewOptions
}
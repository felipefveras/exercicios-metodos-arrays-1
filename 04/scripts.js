const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function listaPacientesFila(listaPacientes, tipoOperacao, nomePaciente) {
    if (tipoOperacao === 'agendar') listaPacientes.push(nomePaciente)
    if (tipoOperacao === 'atender') listaPacientes.shift()
    console.log(listaPacientes.join(", "))
}

listaPacientesFila(pacientes, 'atender', 'Maria Tereza')
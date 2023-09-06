const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(pacientes, pacienteAgendado) {
    pacientes.push(pacienteAgendado)
    console.log(pacientes.join(", "))
}

function atenderPaciente(pacientes) {
    pacientes.shift()
    console.log(pacientes.join(", "))
}

function cancelarAtendimento(pacientes, pacienteCancelado) {
    let indice
    pacientesDeletados = []
    indice = pacientes.indexOf(pacienteCancelado)
    pacientesDeletados = pacientes.splice(indice, 1)
    console.log(pacientes.join(", "))
}

agendarPaciente(pacientes, 'Jorgin do pneu')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'Joana')
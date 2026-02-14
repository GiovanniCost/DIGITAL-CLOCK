
    const select = document.getElementById('city-selection');
    const clock = document.querySelector('clock');
    const date = document.getElementById('date');
    const worldTime = Intl.supportedValuesOf('timeZone');// 1. Obtém a lista de TODOS os fusos horários suportados pelo navegador
    const localTime  = Intl.DateTimeFormat().resolvedOptions().timeZone;// 2. Descobre qual é o fuso horário do próprio usuário automaticamente

   function findCity(){
    select.forEach(hour => { // 3. Preenche o <select> automaticamente
        const option = document.createElement('option');
        option.value = hour;
        option.textContent = hour; // Ex: "America/Sao_Paulo"
        
        if (hour === localTime) { // Se este for o fuso do usuário, já deixa selecionado
            opcao.selected = true;
        }

        select.appendChild(option);
    });
    }
    
    function updateime() {// 4. Função para atualizar o relógio
       
        const timeSelection = select.value; // Pega o valor que está selecionado no menu AGORA
        
        const time = new Date();

        // Opções de formatação
        const optionHors = { timeZone: timeSelection, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const optionDate = { timeZone: timeSelection, dateStyle: 'full' };

        // Atualiza a tela
        relogio.textContent = time.toLocaleTimeString('pt-BR', opcoesHora);
        divData.textContent = time.toLocaleDateString('pt-BR', opcoesData);
    }

    // Adiciona o evento de troca (para atualizar instantaneamente ao mudar o select)
    select.addEventListener('change', atualizar);

    // Inicia o relógio
    setInterval(updateime, 1000);
    updateime(findCity); // Primeira chamada imediata

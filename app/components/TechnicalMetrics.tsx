'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experiências Profissionais
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* Droom Investimentos */}
          <div>
            <div className="grid  grid-cols-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                  Droom Investimentos
                </h3>
                <p className="text-lg font-light italic mb-6 text-yellow-400">
                  Desenvolvedor Full Stack
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-yellow-400 italic">
                  (2023-Atualmente)
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Perfil técnico versátil, com forte atuação em liderança,
                  desenvolvimento full stack e operações em cloud.
                </h4>

                <ul className="mt-2 space-y-2 text-gray-400">
                  <li className="italic">
                    <span className="not-italic">
                      • Desenvolvimento Front-end:{" "}
                    </span>
                    Desenvolver e manter interfaces web escaláveis com HTML5,
                    CSS3, Tailwind CSS, JavaScript, jQuery e React/Next.js.
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Back-end e Arquitetura de Sistemas:{" "}
                    </span>
                    Atuação no desenvolvimento e manutenção de sistemas em
                    Python/Django, criação de APIs, modelagem de dados e
                    otimizações em MySQL e MariaDB.
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Práticas de DevOps e Cloud Computing:{" "}
                    </span>
                    Criação, manutenção e monitoramento de ambientes AWS (VPC,
                    EC2, RDS, App Runner, Route 53, IAM, ECR, Lambda, S3,
                    EventBridge), com automação de deploys via GitHub Actions
                    (CI/CD).
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Integração e Automação:{" "}
                    </span>
                    Implementação e manutenção de webhooks, integrações entre
                    serviços e automações para melhoria contínua de processos e
                    ambientes.
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Colaboração, Liderança Técnica e Comunicação:{" "}
                    </span>
                    Atuação proativa na ponte entre times de produto, marketing,
                    desenvolvimento e operações, apoiando decisões técnicas e
                    evolução da arquitetura.
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Gestão de Hospedagem e CMS:{" "}
                    </span>
                    Administração de ambientes Plesk e WordPress, apoiando
                    demandas de marketing digital e garantindo estabilidade
                    operacional.
                  </li>

                  <li className="italic">
                    <span className="not-italic">
                      • Suporte Técnico (Help Desk & Infraestrutura):{" "}
                    </span>
                    Atendimento a usuários, resolução de incidentes de rede,
                    apoio em migrações de firewall e mudanças de link de
                    internet.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Leve Saúde */}
          <div>
            <div className="grid  grid-cols-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                  Leve Saúde
                </h3>
                <p className="text-lg font-light italic mb-6 text-yellow-400">
                  Estagiário
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-yellow-400 italic">(2022-2023)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Atendimento aos usuários e apoio nas tarefas do setor de TI.
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li className="italic">
                    <span className="not-italic">
                      • Atendimento ao Usuário (Help Desk):{" "}
                    </span>
                    Prestar suporte presencial e remoto aos colaboradores para
                    resolução de problemas básicos (acesso à rede, impressoras,
                    e-mails, sistema operacional, etc.).
                  </li>
                  <li className="italic">
                    <span className="not-italic">• Registro de Chamados: </span>
                    Abrir, acompanhar e encerrar chamados técnicos em sistemas
                    de controle (ex: movidesk).
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Manutenção Preventiva e Corretiva:{" "}
                    </span>
                    Auxiliar na execução de tarefas como limpeza, atualização de
                    software, identificação e solução de falhas em hardware
                    (teclados, mouse, cabos, monitores).
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Instalação e configuração:{" "}
                    </span>
                    Instalar, configurar softwares, sistemas operacionais,
                    impressoras, antivírus sob supervisão.
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Documentação<span className="text-red-600">*</span>
                      :{" "}
                    </span>
                    Auxiliar na manutenção de inventário de equipamentos e
                    documentação de processos.
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Apoio em Projetos do Setor:{" "}
                    </span>
                    Participar do levantamento de necessidades, testes e
                    implementação de novas soluções tecnológicas.
                  </li>
                  <li className="italic">
                    <span className="not-italic">• Educação ao Usuário: </span>
                    Orientar usuários sobre boas práticas de uso de equipamentos
                    e segurança da informação.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* CREART */}
          <div>
            <div className="grid  grid-cols-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                  CREART
                </h3>
                <p className="text-lg font-light italic mb-6 text-yellow-400">
                  Professor de Informática
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-yellow-400 italic">(2018-2019)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Instruir e ensinar.
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li className="italic">
                    <span className="not-italic">
                      • Ensinar Conceitos Básicos de Informática:{" "}
                    </span>
                    Apresentar o computador, suas partes, o uso do mouse,
                    teclado, sistemas operacionais e principais softwares (Word,
                    Paint, navegador web, etc.).
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Elaborar Atividades Inclusivas:{" "}
                    </span>
                    Criar exercícios adaptados, jogos educativos e dinâmicas que
                    respeitem o ritmo de aprendizagem de cada criança, tornando
                    o aprendizado lúdico e interativo.
                  </li>
                  <li className="italic">
                    <span className="not-italic">
                      • Motivar e Reforçar a Autoconfiança:{" "}
                    </span>
                    Elogiar conquistas, incentivar tentativas e reconhecer o
                    progresso, por menor que seja.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Hospital Vitória */}
          <div>
            <div className="grid  grid-cols-2">
              <div className="flex flex-col justify-start">
                <h3 className="text-xl font-semibold mb-1 text-yellow-400">
                  Hospital Vitória
                </h3>
                <p className="text-lg font-light italic mb-6 text-yellow-400">
                  Jovem Aprendiz
                </p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-yellow-400 italic">(2017-2017)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Aprendizado e qualificação para o mercado de trabalho.
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li className="italic ">
                    <span className="not-italic">• Apoio Administrativo:</span>{" "}
                    Auxílio em recepção, atendimento telefônico e tirar dúvidas.
                  </li>
                  <li className="italic ">
                    <span className="not-italic">• Apoio Operacional:</span>{" "}
                    Organização de documentos, digitalização, arquivamento,
                    preenchimento de planilhas (Excel), conferência de dados.
                  </li>
                  <li className="italic ">
                    <span className="not-italic">
                      • Aprendizagem de Processos:
                    </span>{" "}
                    Participação em treinamentos, absorção de rotinas do setor e
                    desenvolvimento profissional.
                  </li>
                  <li className="italic ">
                    <span className="not-italic">
                      • Colaboração em projetos simples:
                    </span>{" "}
                    Auxílio na montagem de apresentações, organização de eventos
                    internos, suporte em pequenas demandas do time
                    administrativo.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

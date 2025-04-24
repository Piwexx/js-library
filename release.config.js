export default  {
  branches: ['main'],  // Las ramas de tu proyecto donde se generarán releases automáticamente.
  plugins: [
    '@semantic-release/commit-analyzer',  // Analiza los commits para determinar el tipo de cambio (major, minor, patch).
    '@semantic-release/release-notes-generator',  // Genera un changelog basado en los commits.
    '@semantic-release/changelog',  // Actualiza el archivo CHANGELOG.md con los nuevos cambios.
    '@semantic-release/git',  // Realiza un commit y push de los cambios en el changelog y versión modificada.
    '@semantic-release/npm',
    '@semantic-release/github'  // Publica el release en GitHub.
  ],
  preset: 'conventionalcommits',  // Utiliza la convención de commits estándar "Conventional Commits" para analizar los mensajes de los commits.
  ci: true,  // Indicamos que el entorno es una CI (Integración Continua), lo que puede activar ciertas optimizaciones en el flujo de trabajo.
  dryRun: false,  // Si es `true`, hace una simulación de lo que pasaría sin realizar cambios. Lo recomendable es ponerlo en `false` en entornos reales.
  analyzeCommits: {
    releaseRules: [
      // Aquí puedes personalizar las reglas de análisis de los commits.
      {type: 'feat', release: 'minor'},  // Si un commit es de tipo "feat" (nueva funcionalidad), se aumenta la versión menor.
      {type: 'fix', release: 'patch'},  // Si un commit es de tipo "fix" (corrección de errores), se aumenta la versión de parche.
      {type: 'perf', release: 'patch'},  // Si un commit es de tipo "perf" (optimización de rendimiento), se aumenta la versión de parche.
      {type: 'BREAKING CHANGE', release: 'major'}  // Si un commit contiene un cambio rompedor, se aumenta la versión mayor.
    ]
  }
};

import { RevealModule } from './base/module'

export class Reveal {
  static modules: { string: RevealModule } | {} = {}
  static addModules(newModules = []) {
    newModules.forEach(
      (value: RevealModule) => (Reveal.modules[value.name] = value),
    )
    // Reveal.modules
    // Reveal.modules = [...Reveal.modules, ...newModules]
  }
}

/**
 * Represents a message in the security console.
 *
 * By default, the console will display the sender icon and title,
 * and the player will be able to expand each message to view its content.
 *
 * Example: {
 *   senderIconFilePath: '/path/to/image.svg',
 *   title: 'Staffing request',
 *   content: ['Paragraph 1.', 'Paragraph 2.']
 * }
 */
export interface Message {
  senderIconFilePath: string;
  title: string;
  content: string[];
}
